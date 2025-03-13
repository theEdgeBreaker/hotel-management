import Navbar from "@/compoents/Navbar";
import Hero from "@/compoents/Hero";
import Booking from "@/compoents/Booking";
import FeaturedRooms from "@/compoents/FeaturedRooms";
import FacilitiesAndServices from "@/compoents/FacilitiesAndServices";
import Testimonials from "@/compoents/Testimonials";
import Contact from "@/compoents/Contact";
import Footer from "@/compoents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <FeaturedRooms />
      <FacilitiesAndServices />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
