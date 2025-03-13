export default function Footer() {
  return (
    <footer className="bg-[#02124B] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Luxury Resort Section */}
        <div>
          <h2 className="text-lg font-bold text-yellow-500">Luxury Resort</h2>
          <p className="mt-3 text-sm">
            Experience unparalleled luxury and comfort in our exclusive resort
            nestled between the mountains and the sea.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-yellow-500">
              🌐
            </a>
            <a href="#" className="text-xl hover:text-yellow-500">
              🐦
            </a>
            <a href="#" className="text-xl hover:text-yellow-500">
              📂
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-yellow-500">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Facilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Guest Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-yellow-500">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-yellow-500">Newsletter</h3>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 rounded-md bg-white text-black border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <button className="w-full mt-2 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
        <p>© 2023 Luxury Resort. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-yellow-500">
            Sitemap
          </a>
          <a href="#" className="hover:text-yellow-500">
            Accessibility
          </a>
          <a href="#" className="hover:text-yellow-500">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
