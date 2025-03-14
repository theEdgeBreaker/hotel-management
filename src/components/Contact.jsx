const Contact = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Reach out to us for reservations, inquiries, or special requests
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Section - Contact Info */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Our Information
            </h3>
            <div className="mt-4 space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-600 text-xl">📍</span>
                <div>
                  <h4 className="font-semibold text-blue-700">Hotel Address</h4>
                  <p>
                    1234 Paradise Bay Road, Oceanview, CA 92051, United States
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-600 text-xl">📞</span>
                <div>
                  <h4 className="font-semibold text-blue-700">Phone Numbers</h4>
                  <p>Reservations: +1 (800) 123-4567</p>
                  <p>Customer Service: +1 (800) 765-4321</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-600 text-xl">📧</span>
                <div>
                  <h4 className="font-semibold text-blue-700">
                    Email Addresses
                  </h4>
                  <p>Reservations: bookings@luxuryresort.com</p>
                  <p>Information: info@luxuryresort.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Send Us a Message
            </h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your phone number (optional)"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Subject *
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Select a subject</option>
                  <option>Booking Inquiry</option>
                  <option>Customer Support</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Message *
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093985!2d144.9537363153161!3d-37.81627927975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43df9c0c1f%3A0x5045675218cee40!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1638919981297!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
