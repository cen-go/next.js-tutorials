import { notFound } from "next/navigation";
import Link from "next/link";

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
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt="" />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </div>
        <p>{newsItem.content}</p>
      </article>
    </main>
  )
}