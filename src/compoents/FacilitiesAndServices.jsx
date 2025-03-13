import React from "react";
import { Smile, Wifi, Gift, Heart, Calculator, Send } from "lucide-react";

const facilities = [
  {
    id: 1,
    title: "Infinity Pool",
    description:
      "Enjoy our breathtaking infinity pool with panoramic ocean views. Perfect for relaxation and capturing stunning sunrise and sunset moments.",
    icon: <Smile size={36} className="text-yellow-500" />,
  },
  {
    id: 2,
    title: "Luxury Spa",
    description:
      "Indulge in our premium spa treatments delivered by expert therapists. Choose from a variety of massages, facials, and wellness therapies.",
    icon: <Heart size={36} className="text-yellow-500" />,
  },
  {
    id: 3,
    title: "State-of-the-Art Gym",
    description:
      "Maintain your fitness routine in our fully-equipped gym with modern equipment, personal trainers, and stunning views.",
    icon: <Calculator size={36} className="text-yellow-500" />,
  },
  {
    id: 4,
    title: "Premium WiFi",
    description:
      "Stay connected with complimentary high-speed WiFi throughout the resort. Perfect for both business and leisure travelers.",
    icon: <Wifi size={36} className="text-yellow-500" />,
  },
  {
    id: 5,
    title: "Gourmet Restaurant",
    description:
      "Experience exquisite dining with our award-winning chefs. Enjoy local and international cuisine prepared with the freshest ingredients.",
    icon: <Gift size={36} className="text-yellow-500" />,
  },
  {
    id: 6,
    title: "Airport Transfers",
    description:
      "Begin your luxury experience right from the airport with our comfortable, private transfer service in premium vehicles.",
    icon: <Send size={36} className="text-yellow-500" />,
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Luxury Facilities & Services
        </h2>
        <p className="text-gray-600 mt-2">
          Experience unparalleled amenities designed for your comfort and
          relaxation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white shadow-lg rounded-lg p-6 flex gap-4 items-start"
          >
            <div>{facility.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                {facility.title}
              </h3>
              <p className="text-gray-600 mt-2">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border border-blue-900 text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition">
          Explore All Amenities
        </button>
      </div>
    </section>
  );
};

export default FacilitiesSection;
