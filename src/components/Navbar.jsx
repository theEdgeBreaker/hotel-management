"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="px-6 md:px-12 py-4 flex justify-between md:items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-yellow-500">Luxury</span>
          <span className="text-blue-900"> Resort</span>
        </div>

        {/* Navigation Links */}
        <div className=" hidden md:flex gap-6 text-blue-900 items-center">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/booking">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu button */}
        <div
          className="md:hidden text-3xl text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button>
            {isOpen ? (
              <IoClose
                className=" fixed right-6 top-4"
                // onClick={() => setIsOpen(false)}
              />
            ) : (
              <IoMenu />
            )}
          </button>
        </div>

        {/* Mobile Menu (Shown when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 p-6 bg-white shadow-md">
            <Link
              href="/"
              className="hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/amenities"
              className="hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="/reviews"
              className="hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/booking" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition">
                Book Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
