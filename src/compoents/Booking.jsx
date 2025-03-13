"use client";

import { useState } from "react";

const Booking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [filters, setFilters] = useState({
    luxury: false,
    budget: false,
    family: false,
    seaView: false,
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Find Your Perfect Room
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Check-in Date</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Check-out Date</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Number of Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.keys(filters).map((filter) => (
            <label key={filter} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={filter}
                checked={filters[filter]}
                onChange={handleFilterChange}
              />
              <span className="capitalize">{filter}</span>
            </label>
          ))}
        </div>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600">
          Find a Room
        </button>
      </div>
    </div>
  );
};

export default Booking;
