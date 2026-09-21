export type BlogPostStatus = "draft" | "scheduled" | "published";

export type BlogAuthor = {
  id: string;
  name: string;
  bio?: string | null;
  avatarUrl?: string | null;
  email?: string | null;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
};

export type BlogTag = {
  id: string;
  name: string;
  slug: string;
};

export type BlogComment = {
  id: string;
  authorName: string;
  authorEmail?: string | null;
  content: string;
  createdAt: string;
  approved?: boolean;
  isApproved?: boolean;
  parentId?: string | null;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  status: BlogPostStatus;
  publishDate: string | null;
  featuredImage: string | null;
  socialSharingImage: string | null;
  estimatedReadingTime: number;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string[] | null;
  createdAt: string;
  updatedAt: string;
  author: BlogAuthor | null;
  categories: BlogCategory[];
  tags: BlogTag[];
  relatedPosts?: BlogPost[];
  comments?: BlogComment[];
};

export type BlogPostsQuery = {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  tagId?: string;
};

export type BlogPostsResponse = {
  data: BlogPost[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type CreateCommentInput = {
  authorName: string;
  authorEmail: string;
  content: string;
};
