"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function Navigator() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={`text-zinc-400 transition ${
                pathname === route.href && "text-zinc-900 font-bold"
              }`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
