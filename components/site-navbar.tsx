"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ModeToggle from "@/components/mode-toggle";

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "backdrop-blur bg-background/75 supports-[backdrop-filter]:bg-background/60",
        "transition-colors",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Jay Patel
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm transition-colors border border-transparent hover:border-border hover:bg-[#1e1f1e]"
          >
            Projects
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
