import Link from "next/link";
import {
  getNewsForYear,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/NewsList";

export default async function FilteredNewsPage({ params }) {
  const years = getAvailableNewsYears();

  const { filter } = await params;
  const year = filter?.[0];

  const months = getAvailableNewsMonths(year);

  let filteredNews;
  let month;

  if (filter && filter.length === 1) {
    filteredNews = getNewsForYear(year);
  }
  if (filter && filter.length === 2) {
    month = filter[1];
    filteredNews = getNewsForYearAndMonth(year, month);
  }

  if (
    (year && !years.includes(+year)) ||
    (month && !months.includes(+month)) ||
    filter?.length > 2
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <section id="archive-header">
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {months.length > 0 && (
          <nav>
            <ul>
              {months.map((month) => (
                <Link key={month} href={`/archive/${year}/${month}`}>
                  {month}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </section>
      {filteredNews?.length > 0 ? (
        <>
          <h2>
            News for {month ? `${month}/` : ""}
            {year}
          </h2>
          <NewsList news={filteredNews} />
        </>
      ) : (
        <p>No filter selected yet.</p>
      )}
      {filteredNews?.length === 0 && (
        <p>No news found for the selected period.</p>
      )}
    </>
  );
}
