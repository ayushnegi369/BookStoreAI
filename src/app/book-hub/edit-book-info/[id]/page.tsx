import React from 'react';
import { useParams } from 'next/navigation';

export default function EditBookInfo() {
  const { id } = useParams();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Edit Book Info</h2>
        <p className="text-gray-500">ID: {id}</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Book name:</label>
          <input type="text" placeholder="Enter Book Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Discription:</label>
          <textarea placeholder="Enter Book Discription" className="w-full p-2 border border-gray-300 rounded mt-1 h-32"></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Cost:</label>
          <input type="text" placeholder="Enter Book Cost" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Add Media:</label>
          <button type="button" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">+</button>
        </div>
        <div>
          <label className="block text-gray-700">Side Media:</label>
          <div className="flex space-x-2">
            <button type="button" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">+</button>
            <button type="button" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">+</button>
            <button type="button" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">+</button>
            <button type="button" className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">+</button>
          </div>
        </div>
        <button type="submit" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">SAVE</button>
      </form>
    </>
  );
}