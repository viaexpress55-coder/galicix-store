export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black">GALICIX</span>

          <span className="rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            STORE
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Categories</a>
          <a href="#">Buying Guides</a>
          <a href="#">Deals</a>
        </nav>
      </div>
    </header>
  );
}