import React from 'react';
import AppLayout from '../Layouts/AppLayout';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">About ServiceHub</h1>
        <p className="mt-4 text-gray-600">
          ServiceHub is a demo app to track ideas for services. Welcome! This page is rendered with Inertia + React.
        </p>
      </div>
    </div>
  );
}

About.layout = (page) => <AppLayout>{page}</AppLayout>;
