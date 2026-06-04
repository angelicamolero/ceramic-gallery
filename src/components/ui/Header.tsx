"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";
import BagIcon from "@/components/icons/BagIcon";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/gallery?q=${encodeURIComponent(searchValue.trim())}`);
    } else {
      router.push("/gallery");
    }
    setSearchOpen(false);
    setSearchValue("");
  };

  return (
    <header className="w-full border-b border-black/10 relative">
      <div className="mx-auto flex max-w-full items-center justify-between px-10 py-4">
        <Link href="/" className="text-xs tracking-widest text-black hover:opacity-70 transition-opacity">
          Ceramic Gallery
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link className="text-black hover:underline" href="/gallery">Shop</Link>
          <Link className="text-black hover:underline" href="/gallery?collection=new">New</Link>
          <Link className="text-black hover:underline" href="/gallery?collection=sale">Sale</Link>
          <a className="text-black hover:underline" href="#">Contact Us</a>
        </nav>

        <div className="flex items-center gap-5 text-sm text-black">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            className="flex cursor-pointer items-center justify-center hover:opacity-70 transition-opacity"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button type="button" className="flex cursor-pointer items-center justify-center">
            <UserIcon className="w-5 h-5" />
          </button>
          <button type="button" className="flex cursor-pointer items-center justify-center">
            <BagIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F5F0E8] border-b border-black/10 px-10 py-4 z-50">
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <SearchIcon className="w-4 h-4 text-black/40 shrink-0" />
            <input
              autoFocus
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search pieces..."
              className="flex-1 bg-transparent text-sm text-black placeholder:text-black/30 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => { setSearchOpen(false); setSearchValue(""); }}
              className="text-xs text-black/40 hover:text-black transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
