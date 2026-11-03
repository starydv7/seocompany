import { pageJsonLd } from "@/lib/seo";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function PageJsonLd({ path }: { path: string }) {
  return <JsonLd data={pageJsonLd(path)} />;
}
