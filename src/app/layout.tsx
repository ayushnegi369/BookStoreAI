import React from 'react';
import Link from 'next/link';
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Book Hub
            </Link>
            <Link href="/book-hub" className="hover:underline">
              Go to Book Hub
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}