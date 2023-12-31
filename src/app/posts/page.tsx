import AddPostForm from "@/components/add-post-form";
import PostsList from "@/components/posts-list";
import prisma from "@/lib/db";

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <main className="text-center pt-16 px-5">
      <AddPostForm />
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>
      <PostsList posts={posts} />
    </main>
  );
}
