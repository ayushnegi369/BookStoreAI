"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BookHubLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFF7E6] p-6 flex flex-col">
        <div className="flex items-center mb-8">
          <span className="text-yellow-500 text-2xl mr-2">👑</span>
          <h1 className="text-2xl font-bold">Book Hub</h1>
        </div>
        <nav className="space-y-4">
          <Link
            href="/book-hub/post-new-book"
            className={`flex items-center text-gray-700 p-2 rounded ${
              pathname === '/book-hub/post-new-book' ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full mr-2"></span>
            Post new book
          </Link>
          <Link
            href="/book-hub/edit-book-info/XXXXXX"
            className={`flex items-center text-gray-700 p-2 rounded ${
              pathname.startsWith('/book-hub/edit-book-info') ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full mr-2"></span>
            Edit Book INFO
          </Link>
          <Link
            href="/book-hub/all-book-info"
            className={`flex items-center text-gray-700 p-2 rounded ${
              pathname === '/book-hub/all-book-info' ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full mr-2"></span>
            ALL Book INFO
          </Link>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center border border-gray-300 rounded p-2">
            <span className="text-gray-500 mr-2">🔍</span>
            <input type="text" placeholder="ENTER BOOK ID" className="bg-transparent outline-none text-gray-500" />
          </div>
          <p className="text-gray-500 text-sm mt-2">© PREVIEW ID</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}