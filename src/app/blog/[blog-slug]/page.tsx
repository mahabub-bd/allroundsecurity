import BlogDetail from "@/components/blog/BlogDetail";
import { SingleBlog } from "@/types/types";
import { apiService } from "@/utilis/apiService";

export default async function BlogDetailsPage({
  params,
}: {
  params: { "blog-slug": string };
}) {
  const { "blog-slug": blogSlug } = params;

  const blog: SingleBlog = await apiService(`blog/${blogSlug}`);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return <BlogDetail {...blog} />;
}
