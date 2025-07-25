// src/components/Header.tsx
import Link from 'next/link';

import { UserButton } from '@clerk/nextjs'
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-white">
        <div className="text-xl font-bold">🌐</div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/home">Home</Link>
          <Link href="/about" className='hover:text-indigo-400'>About</Link>
          <Link href="/features" className='hover:text-indigo-400'>Features</Link>
          <Link href="/marketplace" className='hover:text-indigo-400'>Marketplace</Link>
          <Link href="/company" className='hover:text-indigo-400'>Company</Link>
        </nav>

        <div>
          <UserButton />
          <a href="#" className="text-sm font-semibold hover:text-indigo-400">Log in <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </header>
  );
}
