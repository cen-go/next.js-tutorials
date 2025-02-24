import Posts from '@/components/posts';
import { getPosts, getPostsCount } from '@/lib/posts';

export async function generateMetadata() {
  const response = getPostsCount();
  const {count} = response[0];

  return {
    title: `Browse all ${count} posts`,
    description: "See all your posts."
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
