import React from "react";

const rooms = [
  {
    id: 1,
    title: "Deluxe Ocean View",
    description:
      "Spacious room with stunning ocean views and premium amenities for an unforgettable stay.",
    price: "$299",
    category: "Popular",
    image: "https://source.unsplash.com/400x300/?luxury,hotel",
  },
  {
    id: 2,
    title: "Executive Suite",
    description:
      "Elegant suite with separate living area, premium furnishings, and personalized service.",
    price: "$459",
    category: "Luxury",
    image: "https://source.unsplash.com/400x300/?suite,hotel",
  },
  {
    id: 3,
    title: "Family Suite",
    description:
      "Spacious accommodations for the whole family with interconnected rooms and kid-friendly amenities.",
    price: "$399",
    category: "Family",
    image: "https://www.pexels.com/photo/upholstered-bed-near-cabinet-262048/",
  },
];

const FeaturedRooms = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Featured Rooms</h2>
        <p className="text-gray-600 mt-2">
          Experience the pinnacle of luxury and comfort with our carefully
          designed rooms and suites.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {room.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">{room.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{room.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-yellow-600">
                  {room.price} <span className="text-sm">/night</span>
                </span>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
          View All Rooms
        </button>
      </div>
    </section>
  );
};

export default FeaturedRooms;
