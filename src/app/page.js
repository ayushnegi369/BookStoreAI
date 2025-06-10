import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Book Hub</h1>
      <p className="text-lg mb-4">
        This is the home page of Book Hub. Manage your books by visiting the Book Hub section.
      </p>
      <Link href="/book-hub" className="text-blue-500 hover:underline">
        Go to Book Hub
      </Link>
    </div>
  );
}