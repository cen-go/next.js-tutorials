import { notFound } from "next/navigation";
import Link from "next/link";

import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({params}) {
  const {newsSlug} = params;
  const newsItem = await getNewsItem(newsSlug)

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