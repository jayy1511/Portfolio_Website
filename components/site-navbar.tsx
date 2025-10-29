"use client";

import Link from "next/link";
import Image from "next/image";
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
        "fixed inset-x-0 top-0 z-50 h-16",
        "backdrop-blur bg-background/75 supports-[backdrop-filter]:bg-background/60",
        scrolled ? "border-b border-border" : "border-b border-transparent",
        "transition-colors",
      ].join(" ")}
    >
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block h-8 w-8 shrink-0">
            <Image
              src="/logo-black.svg"
              alt="Logo"
              fill
              sizes="32px"
              className="dark:hidden"
              priority
            />
            <Image
              src="/logo-white.svg"
              alt="Logo"
              fill
              sizes="32px"
              className="hidden dark:block"
              priority
            />
          </span>
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            Jay Patel
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md px-3.5 py-2 text-sm md:text-base border border-transparent hover:border-border hover:bg-accent transition-colors"
          >
            Projects
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
