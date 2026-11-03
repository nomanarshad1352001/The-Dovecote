"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { searchItems } from "@/lib/content";
import { ArrowUpRight, CloseIcon, MenuIcon, SearchIcon } from "./Icons";

const navItems = [
  { label: "Research", href: "/research" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Press", href: "/press-1" },
  { label: "Careers", href: "/careers" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add("no-scroll");
      window.setTimeout(() => searchInput.current?.focus(), 40);
    } else {
      document.body.classList.remove("no-scroll");
      setQuery("");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [searchOpen]);

  const normalizedQuery = query.trim().toLowerCase();
  const results = (normalizedQuery
    ? searchItems.filter((item) => `${item.title} ${item.type} ${item.description}`.toLowerCase().includes(normalizedQuery))
    : searchItems
  ).slice(0, 8);

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    if (results[0]) router.push(results[0].href);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner shell">
          <Link className="brand" href="/" aria-label="The Dovecote Institute, home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M5 26V6h8.5C22 6 27 10.2 27 16s-5 10-13.5 10H5Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 12v8h3.2c3.3 0 5.3-1.4 5.3-4s-2-4-5.3-4H11Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-type"><strong>The Dovecote</strong><span>Institute</span></span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href === "/work" && pathname.startsWith("/work/"));
              return <Link key={item.href} className={active ? "active" : ""} href={item.href}>{item.label}</Link>;
            })}
          </nav>

          <div className="header-actions">
            <button className="search-trigger" type="button" onClick={() => setSearchOpen(true)} aria-label="Search this site">
              <SearchIcon width={18} height={18} /><span>Search</span><kbd>⌘K</kbd>
            </button>
            <Link className="header-contact" href="/contact">Let’s talk <ArrowUpRight width={16} height={16} /></Link>
            <button className="menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu" id="mobile-navigation">
            <nav className="shell" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}<ArrowUpRight width={20} height={20} /></Link>
              ))}
              <Link href="/contact"><span>06</span>Contact<ArrowUpRight width={20} height={20} /></Link>
              <button type="button" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}><SearchIcon width={19} height={19} /> Search the institute</button>
            </nav>
          </div>
        )}
      </header>

      {searchOpen && (
        <div className="search-backdrop" role="presentation" onMouseDown={() => setSearchOpen(false)}>
          <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search the institute" onMouseDown={(event) => event.stopPropagation()}>
            <form className="search-form" onSubmit={submitSearch}>
              <SearchIcon width={24} height={24} />
              <input ref={searchInput} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search research, projects, and pages…" aria-label="Search query" />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"><CloseIcon width={22} height={22} /></button>
            </form>
            <div className="search-results">
              <p className="eyebrow">{normalizedQuery ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Explore the institute"}</p>
              {results.length > 0 ? results.map((item) => (
                <Link href={item.href} key={`${item.type}-${item.href}-${item.title}`} className="search-result">
                  <span><small>{item.type}</small><strong>{item.title}</strong><span>{item.description}</span></span>
                  <ArrowUpRight width={20} height={20} />
                </Link>
              )) : (
                <div className="search-empty"><h3>No results for “{query}”</h3><p>Try “life satisfaction,” “Nomination Day,” or “partnerships.”</p></div>
              )}
            </div>
            <div className="search-footer"><span><kbd>↵</kbd> open first result</span><span><kbd>esc</kbd> close</span></div>
          </section>
        </div>
      )}
    </>
  );
}
