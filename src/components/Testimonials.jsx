"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Updated testimonials array with image paths
const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    src: "/Testimonials1.jpg", // Unique image for each testimonial
    review:
      "Absolutely stunning resort with impeccable service. The ocean view suite exceeded all expectations, and the staff went above and beyond to make our anniversary special. Can't wait to return!",
  },
  {
    name: "David Thompson",
    location: "London, UK",
    src: "/Testimonials2.jpg", // Different image
    review:
      "As a frequent business traveler, I've stayed at many luxury hotels, but this resort truly stands out. The Executive Suite was perfect for my needs, with a comfortable workspace and stunning views. The airport pickup service was seamless.",
  },
  {
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    src: "/Testimonials3.jpg", // Different image
    review:
      "My family and I had an amazing vacation at this resort. The Family Suite was spacious and comfortable, and the kids loved the pool. The staff was incredibly friendly and attentive to our needs. The dining options were fantastic!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Guest Experiences</h2>
        <p className="text-gray-600 mt-2">
          Discover what our guests have to say about their stay with us.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition">
          <ChevronLeft className="text-gray-700" />
        </button>
        <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition">
          <ChevronRight className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
