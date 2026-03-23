import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Nav(){
  return (
    <header className="sticky top-0 z-50 bg-white/100 backdrop-blur border-b border-gray-300 py-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/servicehub-logo.svg" alt="ServiceHub" className="h-20 w-20 rounded-xl shadow-lg" />
          <span className="font-bold text-2xl text-blue-800">ServiceHub</span>
        </Link>

        <nav className="flex items-center gap-10 text-lg font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-900">
            Find Services
          </Link>
          <Link href="/providers" className="hover:text-gray-900">
            Find Talent
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
