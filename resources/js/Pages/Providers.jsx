import React from 'react';
import AppLayout from '../Layouts/AppLayout';

const profiles = [
  {
    id: 1,
    name: 'Ava Chen',
    title: 'Senior UI/UX Designer',
    rate: '$45/hr',
    location: 'Remote',
    skills: ['Figma', 'Sketch', 'Prototyping'],
    bio: 'I help startups create intuitive interfaces and delightful user experiences.',
  },
  {
    id: 2,
    name: 'Ravi Patel',
    title: 'Full-stack Laravel Developer',
    rate: '$55/hr',
    location: 'IND',
    skills: ['Laravel', 'Vue', 'MySQL'],
    bio: 'Building reliable backend systems and responsive frontends for SaaS businesses.',
  },
  {
    id: 3,
    name: 'Mia Johnson',
    title: 'Content Strategist & Writer',
    rate: '$40/hr',
    location: 'US',
    skills: ['SEO', 'Blog Writing', 'Brand Voice'],
    bio: 'Creating content that drives traffic and converts visitors into customers.',
  },
];

export default function Providers() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find talent</h1>
          <p className="mt-2 text-gray-600">
            Browse profiles of vetted freelancers and small agencies ready to work on your next project.
          </p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
          Post a service request
        </button>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{profile.name}</h2>
                <p className="text-sm text-gray-600">{profile.title}</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {profile.rate}
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-600">{profile.bio}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
              <div>{profile.location}</div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Invite to interview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Providers.layout = (page) => <AppLayout>{page}</AppLayout>;
