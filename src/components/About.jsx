import React from 'react';

function About() {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 py-12 px-6 ">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
        {/* Header Section */}
        <header className="text-center mb-12 wow animate__animated animate__zoomIn">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">Discover our mission, vision, and values.</p>
        </header>

        {/* Content Section */}
        <section className="mb-12 wow animate__animated animate__zoomIn1">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Mega store, our mission is to deliver the best online shopping experience
            by providing high-quality products at competitive prices. We are committed to customer
            satisfaction and strive to make every shopping experience seamless and enjoyable.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our vision is to become the leading online retailer known for our exceptional service
            and diverse range of products. We aim to continually innovate and adapt to the evolving
            needs of our customers to stay at the forefront of the e-commerce industry.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            <li><strong>Customer First:</strong> We prioritize our customers' needs and work hard to exceed their expectations.</li>
            <li><strong>Integrity:</strong> We operate with honesty and transparency in all our business practices.</li>
            <li><strong>Innovation:</strong> We embrace change and continuously seek new ways to enhance our services.</li>
            <li><strong>Excellence:</strong> We are dedicated to providing the highest quality products and services.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or need assistance? Feel free to contact us at
            <a href="mailto:support@yourcompany.com" className="text-blue-500 hover:underline ml-1">support@yourcompany.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
