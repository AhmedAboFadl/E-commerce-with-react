import React from 'react';

export default function Footer() {
  return (
    <div className="relative w-full  h-[380px] bg-orange-400 text-white py-12 mt-[150px]">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between">
        {/* Get In Touch Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
          <p className="mb-4">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no.
          </p>
          <p className="mb-2">123 Street, New York, USA</p>
          <p className="mb-2">mail@domain.com</p>
          <p>+012 345 67890</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> {/* Use FontAwesome or similar icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i> {/* Use FontAwesome or similar icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i> {/* Use FontAwesome or similar icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i> {/* Use FontAwesome or similar icon library */}
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 px-4 rounded-l-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-4 rounded-r-md hover:bg-gray-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-blue-500 py-4 text-center">
        <p className="text-sm text-gray-300">© 2024 mega store. All rights reserved.</p>
      </div>
    </div>
  );
}
