import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />
      <main className="mt-10">{children}</main>
      <Footer />
    </div>
  );
}
