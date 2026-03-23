import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">ServiceHub</h3>
            <p className="mt-3 text-sm text-gray-600">
              A demo marketplace for hiring and offering remote work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="/services" className="hover:text-gray-900">
                  Find Services
                </a>
              </li>
              <li>
                <a href="/providers" className="hover:text-gray-900">
                  Find Talent
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Stay in touch</h3>
            <p className="mt-3 text-sm text-gray-600">
              Get updates about new services, talent, and marketplace tips.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ServiceHub. Built with Laravel + Inertia + React.
        </div>
      </div>
    </footer>
  );
}
