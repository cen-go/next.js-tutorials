import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import ModalBackdrop from "@/components/ModalBackdrop";

export default async function InterceptedImagePage({ params }) {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
