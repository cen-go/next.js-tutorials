import { getLatestNews } from "@/lib/news"
import NewsList from "@/components/NewsList";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}