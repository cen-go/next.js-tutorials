import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <main>
      <h1>Latest News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <div className="news-grid-image">
                <Image
                src={`/images/news/${news.image}`}
                alt="news image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              </div>
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
