import Loading from "@/app/contact-us/loading";
import MostPopular from "@/components/blog/MostPopularBlog";
import RecentBlog from "@/components/blog/RecentBlog";
import PageBanner from "@/components/common/PageBanner";
import { Blog } from "@/types/types";
import { apiService } from "@/utilis/apiService";
import { Suspense } from "react";

export default async function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogData: Blog[] = await apiService("blog");
  return (
    <section>
      <PageBanner pageName="Blog" />
      <Suspense fallback={<Loading />}>
        <div className="grid lg:grid-cols-[1fr_440px] grid-cols-1 py-10 gap-10 container mx-auto">
          <div>{children}</div>
          <div className="grid grid-cols-1 gap-5 ">
            <MostPopular popularBlogs={blogData} />
            <RecentBlog blogs={blogData} />
          </div>
        </div>
      </Suspense>
    </section>
  );
}
