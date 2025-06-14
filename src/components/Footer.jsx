import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1749886809045-WLAlogo.png" 
                alt="Women Lens Africa" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-marcellus font-bold">Women Lens Africa</h3>
                <p className="text-sm text-gray-300 font-marcellus">Women Leadership, Data, Digital Rights</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-marcellus">
              Dedicated to advancing gender equality and women's empowerment across Africa through 
              innovative programs, capacity building, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-marcellus font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-marcellus">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-primary transition-colors">Impact</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-primary transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-marcellus font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 font-marcellus">
              <div className="flex items-center space-x-2">
                <FiMail size={16} className="text-primary" />
                <a 
                  href="mailto:info@womenlens.africa" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@womenlens.africa
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone size={16} className="text-primary" />
                <span className="text-gray-300">+256 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin size={16} className="text-primary" />
                <span className="text-gray-300">Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 font-marcellus">
            © 2024 Women Lens Africa. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm font-marcellus">Powered by</span>
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1749836650782-inzozi.png" 
              alt="Inzozi Logo" 
              className="h-10 w-auto brightness-0 invert" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;