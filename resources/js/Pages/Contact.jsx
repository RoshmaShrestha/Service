import React from 'react';
import AppLayout from '../Layouts/AppLayout';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-600">This is a placeholder contact page. Replace with your contact form or details.</p>
      </div>
    </div>
  );
}

Contact.layout = (page) => <AppLayout>{page}</AppLayout>;
