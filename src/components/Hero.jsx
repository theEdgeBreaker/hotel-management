import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/Hero-img.jpg"
        alt="Luxury Resort"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-bold">
          Experience Luxury & Unparalleled Comfort
        </h1>
        <p className="text-lg mt-4  w-4/5">
          Indulge in a world of elegance, personalized service, and breathtaking
          views at our exclusive resort.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/booking">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition-all duration-300">
              Book Now
            </button>
          </Link>
          <Link href="/rooms">
            <button className="relative border border-white text-white px-6 py-3 rounded-md font-semibold overflow-hidden group">
              <span
                className="absolute inset-0 bg-blue-900 scale-x-0 origin-right 
              transition-transform duration-300 group-hover:scale-x-100"
              ></span>
              <span className="relative z-10">Explore Rooms</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
