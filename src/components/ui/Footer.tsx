export default function Footer() {
  return (
    <footer className="bg-[#7A2533] text-white">

      {/* Main grid */}
      <div className="px-6 pt-14 pb-10 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Ceramic Gallery</p>
          <p className="text-sm leading-6 text-white/70 max-w-[200px]">
            Handmade ceramics from Buenos Aires. Made with love and clay.
          </p>
        </div>

        {/* Shop */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Shop</p>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">All pieces</a></li>
            <li><a href="#" className="hover:text-white transition-colors">New</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Collection</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <a href="mailto:hello@ceramicgallery.com" className="hover:text-white transition-colors">
                hello@ceramicgallery.com
              </a>
            </li>
            <li>
              <a href="tel:+541100000000" className="hover:text-white transition-colors">
                +54 11 0000-0000
              </a>
            </li>
            <li className="text-white/60">Buenos Aires, Argentina</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Follow</p>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="px-6 py-5 border-t border-white/10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-white/40">© 2026 Ceramic Gallery · By Angelica Molero · All rights reserved</p>
        <p className="text-xs text-white/40">Buenos Aires, Argentina</p>
      </div>

      {/* Watermark */}
      <div className="overflow-hidden px-4 pb-2">
        <p className="text-[80px] md:text-[140px] font-bold leading-none text-white/[0.06] uppercase tracking-tight select-none">
          Ceramic Gallery
        </p>
      </div>

    </footer>
  );
}
