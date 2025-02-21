import Link from "next/link";
import { getAvailableNewsYears, getAvailableNewsMonths } from "@/lib/news";

export default async function ArchiveFilter({ year, month }) {
  const years = await getAvailableNewsYears();
  const months = getAvailableNewsMonths(year);

  if ((year && !years.includes(year)) || (month && !months.includes(month))) {
    throw new Error("Invalid filter");
  }

  return (
    <section id="archive-header">
      <nav>
        <ul>
          {years.map((yearItem) => (
            <li key={yearItem}>
              <Link
                href={`/archive/${yearItem}`}
                className={yearItem === year ? "active" : undefined}
              >
                {yearItem}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {months.length > 0 && (
        <nav>
          <ul>
            {months.map((monthItem) => (
              <Link
                key={monthItem}
                href={`/archive/${year}/${monthItem}`}
                className={monthItem === month ? "active" : undefined}
              >
                {monthItem}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}
