import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
import FeaturedRooms from "../components/FeaturedRooms";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Facilities from "../components/Facilities";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <FeaturedRooms />
      <Facilities />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
