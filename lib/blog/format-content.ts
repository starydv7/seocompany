/** Normalize blog body for readable article layout (HTML or Markdown). */
export function formatArticleContent(content: string): string {
  const trimmed = content?.trim() ?? "";
  if (!trimmed) return "";

  const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(trimmed);
  if (looksLikeHtml) return trimmed;

  const looksLikeMarkdown =
    /^#{1,3}\s/m.test(trimmed) ||
    /^\s*[-*]\s/m.test(trimmed) ||
    /^\s*\d+\.\s/m.test(trimmed) ||
    /\*\*[^*]+\*\*/.test(trimmed);

  if (looksLikeMarkdown) return markdownToHtml(trimmed);

  // Plain text → paragraphs
  const blocks = trimmed.split(/\n{2,}/).filter((b) => b.trim());
  if (blocks.length <= 1 && trimmed.length > 0) {
    const sentences = trimmed.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [trimmed];
    const chunks: string[] = [];
    let current = "";
    for (const s of sentences) {
      if (current.length + s.length > 320) {
        if (current) chunks.push(current.trim());
        current = s;
      } else {
        current += s;
      }
    }
    if (current) chunks.push(current.trim());
    return chunks.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  }

  return blocks.map((p) => `<p>${escapeHtml(p.trim())}</p>`).join("");
}

function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let para: string[] = [];

  const flushPara = () => {
    if (!para.length) return;
    out.push(`<p>${inlineFormat(para.join(" "))}</p>`);
    para = [];
  };

  const closeList = () => {
    if (!listType) return;
    out.push(listType === "ul" ? "</ul>" : "</ol>");
    listType = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushPara();
      closeList();
      continue;
    }

    const h3 = trimmed.match(/^###\s+(.+)$/);
    const h2 = trimmed.match(/^##\s+(.+)$/);
    const h1 = trimmed.match(/^#\s+(.+)$/);
    if (h3 || h2 || h1) {
      flushPara();
      closeList();
      const text = (h3 || h2 || h1)![1];
      const tag = h3 ? "h3" : h2 ? "h2" : "h2";
      out.push(`<${tag}>${inlineFormat(text)}</${tag}>`);
      continue;
    }

    const ul = trimmed.match(/^[-*]\s+(.+)$/);
    const ol = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ul || ol) {
      flushPara();
      const next = ul ? "ul" : "ol";
      if (listType !== next) {
        closeList();
        listType = next;
        out.push(next === "ul" ? "<ul>" : "<ol>");
      }
      out.push(`<li>${inlineFormat((ul || ol)![1])}</li>`);
      continue;
    }

    closeList();
    para.push(trimmed);
  }

  flushPara();
  closeList();
  return out.join("");
}

function inlineFormat(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return html;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
