import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6'; // Added FaXTwitter and FaTiktok

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:info@womenlens.africa?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-marcellus font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl font-marcellus max-w-3xl mx-auto leading-relaxed">
              Get in touch with Women Lens Africa. We'd love to hear from you and 
              explore how we can work together to empower women across the continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-marcellus font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 font-marcellus text-lg leading-relaxed mb-8">
                  Whether you're interested in partnering with us, volunteering, or learning 
                  more about our work, we're here to connect and collaborate.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-marcellus font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:info@womenlens.africa" 
                      className="text-gray-600 font-marcellus hover:text-primary transition-colors"
                    >
                      info@womenlens.africa
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-marcellus font-semibold text-gray-900">Phone</h3>
                    <span className="text-gray-600 font-marcellus">+256 782 018 922</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-marcellus font-semibold text-gray-900">Location</h3>
                    <span className="text-gray-600 font-marcellus">Kampala, Uganda</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-marcellus font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
                    <FiFacebook size={20} />
                  </a>
                  <a href="#" className="bg-primary bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaXTwitter size={18} /> {/* Updated to X (Twitter) icon */}
                  </a>
                  <a href="#" className="bg-primary bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
                    <FiInstagram size={20} />
                  </a>
                  <a href="#" className="bg-primary bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="#" className="bg-primary bg-opacity-10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaTiktok size={18} /> {/* Added TikTok icon */}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-marcellus font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-marcellus font-semibold hover:bg-accent transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FiSend size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-marcellus font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              Located in the heart of Kampala, Uganda, our office is open for partnerships, 
              collaborations, and community engagement.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <FiMapPin className="text-primary text-4xl mx-auto mb-2" />
                <p className="text-gray-600 font-marcellus">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500 font-marcellus">Kampala, Uganda</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-marcellus font-semibold text-gray-900 mb-2">Office Hours</h4>
                <p className="text-gray-600 font-marcellus">Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 font-marcellus">Sat: 9:00 AM - 1:00 PM</p>
              </div>
              <div className="text-center">
                <h4 className="font-marcellus font-semibold text-gray-900 mb-2">Meeting Policy</h4>
                <p className="text-gray-600 font-marcellus">Appointments recommended</p>
                <p className="text-gray-600 font-marcellus">Walk-ins welcome</p>
              </div>
              <div className="text-center">
                <h4 className="font-marcellus font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-600 font-marcellus">English, Luganda</p>
                <p className="text-gray-600 font-marcellus">Swahili</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;