import React from 'react';

const DashAd = () => {
  return (
    <div className="min-h-screen bg-darkGrey">
      <div className="bg-customBlue p-4 text-white">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-sidebar bg-grey p-5 ">
          <ul>
            <li className="mb-4">
              <a href="#" className="text-customBlue hover:text-customBlue-dark">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-customBlue hover:text-customBlue-dark">Students</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-customBlue hover:text-customBlue-dark">Guides</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-customBlue hover:text-customBlue-dark">Projects</a>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="w-full p-4">
          <h2 className="text-xl font-bold mb-4 text-white">Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Total Students</h3>
              <p className="text-gray-600">150</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Total Guides</h3>
              <p className="text-gray-600">25</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Total Projects</h3>
              <p className="text-gray-600">50</p>
            </div>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default DashAd;
