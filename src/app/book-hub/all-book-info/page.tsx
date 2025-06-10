import React from 'react';

export default function AllBookInfo() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">ALL Books</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#FFF7E6]">
            <th className="border border-gray-300 p-2 text-left">ID</th>
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">...</th>
            <th className="border border-gray-300 p-2 text-left">...</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(3)].map((_, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}