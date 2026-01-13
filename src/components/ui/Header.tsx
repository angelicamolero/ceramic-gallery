import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";
import BagIcon from "@/components/icons/BagIcon";

export default function Header() {
  return (
    <header className="w-full border-b border-black/10">
        <div className="mx-auto flex max-w-full items-center justify-between px-10 py-4">
            <div className="text-xs tracking-widest text-black">
            Ceramic Gallery
            </div>

            <nav className="hidden items-center gap-8 text-sm md:flex">
            <a className="text-black hover:underline" href="#">Shop</a>
            <a className="text-black hover:underline" href="#">New</a>
            <a className="text-black hover:underline" href="#">Sale</a>
            <a className="text-black hover:underline" href="#">Contact Us</a>
            </nav>

            <div className="flex items-center gap-5 text-sm text-black">
            <button type="button" className="flex cursor-pointer items-center justify-center">
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
    </header>
  );
}

