import React from 'react';
import AppLayout from '../Layouts/AppLayout';

const categories = [
  { name: 'Medicine Delivery', icon: '💊' },
  { name: 'Electrician / Plumber / Home Repair', icon: '🔧' },
  { name: 'Home Cleaning', icon: '🧹' },
  { name: 'Vehicle Mechanic Booking', icon: '🚗' },
  { name: 'Home Tutor Booking', icon: '📚' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 text-white md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Find services or hire talent—fast.</h1>
            <p className="mt-6 text-lg text-blue-100">
              ServiceHub is a demo marketplace built on Laravel + Inertia + React. Browse services, post requests, and connect with skilled freelancers.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
              >
                Find services
              </a>
              <a
                href="/providers"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
              >
                Hire talent
              </a>
            </div>
          </div>

          <div className="w-full max-w-md rounded-3xl bg-white/10 p-8 shadow-lg backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Quick search</h2>
            <p className="mt-2 text-sm text-blue-100">Type a skill or project and explore open opportunities.</p>
            <div className="mt-6 flex items-center gap-3">
              <input
                type="text"
                placeholder="e.g. React developer, Figma, copywriting"
                className="flex-1 rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recommended core services</h2>
            <p className="mt-2 text-gray-600">
              Start with the top service categories that deliver value quickly for your project or business.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Browse all services
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Browse services and providers in this category.
              </p>
              <a
                href="/services"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Explore services →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-purple-50 p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Make your first connection</h2>
          <p className="mt-3 text-gray-600">
            Create an account, post your first service request, and start receiving proposals from skilled professionals.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Sign up
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Log in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.layout = (page) => <AppLayout>{page}</AppLayout>;
