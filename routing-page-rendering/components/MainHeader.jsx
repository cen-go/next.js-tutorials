"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathName = usePathname();

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathName === "/" ? "active" : undefined}>Home</Link>
          </li>
          <li>
            <Link
              href="/news"
              className={pathName.startsWith("/news") ? "active" : undefined}
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
