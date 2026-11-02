import Link from "next/link";
import Image from "next/image";
import { blogMediaUrl } from "@/lib/blog/config";
import type { BlogPost } from "@/lib/blog/types";

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function excerptText(post: BlogPost, max = 130) {
  const raw = post.excerpt || post.content || "";
  const text = raw.replace(/<[^>]+>/g, "").trim();
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const image = blogMediaUrl(post.featuredImage || post.socialSharingImage);
  const authorName = post.author?.name ?? "BrandMarketing";
  const tags = post.tags?.slice(0, 3) ?? [];
  const categories = post.categories?.slice(0, 2) ?? [];
  const labelChips = tags.length > 0 ? tags : categories;

  return (
    <article className="group flex h-full flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl bg-white/[0.05]">
        <div className="relative aspect-[16/10] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={post.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-400/10 to-indigo-400/10 text-sm font-medium text-blue-300">
              BrandMarketing Blog
            </div>
          )}
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-sm text-white/50">
          <span className="font-medium text-white/80">{authorName}</span>
          {post.publishDate ? (
            <>
              <span className="mx-1.5 text-slate-300">•</span>
              <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
            </>
          ) : null}
        </p>

        <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight text-white">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-blue-300">
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-white/65">
          {excerptText(post)}
        </p>

        {labelChips.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {labelChips.map((chip) => (
              <span
                key={chip.id}
                className="rounded-full border border-white/[0.09] px-2.5 py-0.5 text-xs font-semibold text-white/65"
              >
                {chip.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
