import React from 'react';
import { redirect } from 'next/navigation';

export default function BookHub() {
  redirect('/book-hub/post-new-book');
}