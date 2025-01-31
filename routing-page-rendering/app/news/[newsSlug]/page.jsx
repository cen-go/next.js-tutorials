import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default async function NewsDetailPage({params}) {
  const {newsSlug} = await params;
  const newsItem = DUMMY_NEWS.find( news => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <main>
      <article className="news-article">
        <div>
          <img src={`/images/news/${newsItem.image}`} alt="" />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </div>
        <p>{newsItem.content}</p>
      </article>
    </main>
  )
}