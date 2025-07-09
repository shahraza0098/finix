// src/components/Header.tsx
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-white">
        <div className="text-xl font-bold">🌐</div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-indigo-400">Product</a>
          <a href="#" className="hover:text-indigo-400">Features</a>
          <a href="#" className="hover:text-indigo-400">Marketplace</a>
          <a href="#" className="hover:text-indigo-400">Company</a>
        </nav>

        <div>
          <a href="#" className="text-sm font-semibold hover:text-indigo-400">Log in <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </header>
  );
}
