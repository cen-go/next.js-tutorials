import { Suspense } from "react";
import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "@/components/NewsList";
import ArchiveFilter from "@/components/ArchiveFilter";

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  }
  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  if (!year && !month) {
    return <p>No news found for the selected period.</p>;
  }

  return <NewsList news={news} />;
}

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  const year = filter?.[0];
  const month = filter?.[1];

  if (filter?.length > 2) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <Suspense fallback={<div className="filter-loader"></div>}>
        <ArchiveFilter year={year} month={month} />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </>
  );
}
