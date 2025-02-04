import { DUMMY_NEWS } from "@/dummy-news";

export default async function ImagePage({params}) {
  const {newsSlug} = await params;
    const newsItem = DUMMY_NEWS.find( news => news.slug === newsSlug);

    if (!newsItem) {
      notFound();
    }

  return (
    <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}