import Link from "next/link";
import Image from "next/image";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <div className="news-grid-image">
              <Image
                src={`/images/news/${newsItem.image}`}
                alt="news image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
