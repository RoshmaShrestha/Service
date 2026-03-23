import React from 'react';
import AppLayout from '../Layouts/AppLayout';

const services = [
  {
    id: 1,
    title: 'Medicine Delivery',
    budget: '$10 - $25',
    tags: ['Delivery', 'Pharmacy', 'Urgent'],
    provider: 'QuickMeds',
    description: 'Get prescriptions and healthcare items delivered to your doorstep within a few hours.',
  },
  {
    id: 2,
    title: 'Electrician / Plumber / Home Repair',
    budget: '$30 - $80',
    tags: ['Electrical', 'Plumbing', 'Handyman'],
    provider: 'HomeFix',
    description: 'Book trusted technicians for repairs, installations, and home maintenance tasks.',
  },
  {
    id: 3,
    title: 'Home Cleaning',
    budget: '$25 - $60',
    tags: ['Cleaning', 'Deep Clean', 'Move-out'],
    provider: 'Sparkle Cleaners',
    description: 'Schedule professional cleaners for regular home maintenance or deep cleaning sessions.',
  },
  {
    id: 4,
    title: 'Vehicle Mechanic Booking',
    budget: '$40 - $120',
    tags: ['Mechanic', 'Car Service', 'Diagnostics'],
    provider: 'AutoCare',
    description: 'Find local mechanics for repairs, regular servicing, and roadside assistance bookings.',
  },
  {
    id: 5,
    title: 'Home Tutor Booking',
    budget: '$15 - $45',
    tags: ['Tutoring', 'Online', 'In-person'],
    provider: 'LearnMate',
    description: 'Connect with tutors for academic support in math, science, languages, and more.',
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Core services (recommended)</h1>
          <p className="mt-2 text-gray-600">
            Start here: these core services cover the most common needs for your first version.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
            Post a service request
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
            Search services
          </button>
        </div>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                <p className="mt-1 text-sm text-gray-600">{service.provider}</p>
              </div>
              <div className="text-sm font-semibold text-blue-600">{service.budget}</div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{service.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-500">Posted 2 days ago</div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Send inquiry
              </button>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Want to see more?</h2>
        <p className="mt-2 text-gray-600">This demo app can be extended with real services, filters, and user accounts.</p>
      </div>
    </div>
  );
}

Services.layout = (page) => <AppLayout>{page}</AppLayout>;
