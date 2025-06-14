import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiTarget, FiUsers } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';

const About = () => {
  const { content } = useContent();

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
              {content.about.title}
            </h1>
            <p className="text-xl font-marcellus max-w-3xl mx-auto leading-relaxed">
              {content.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FiTarget className="text-primary text-3xl mr-4" />
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 font-marcellus text-lg leading-relaxed">
                {content.about.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FiEye className="text-primary text-3xl mr-4" />
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 font-marcellus text-lg leading-relaxed">
                {content.about.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to empowering women
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.about.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
              >
                <FiHeart className="text-primary text-2xl mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-marcellus text-lg">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-marcellus font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 font-marcellus text-lg leading-relaxed">
                <p>
                  Women Lens Africa was founded with a simple yet powerful belief: that when women 
                  are empowered with the right tools, knowledge, and opportunities, they become 
                  catalysts for positive change in their communities.
                </p>
                <p>
                  Based in Uganda, we have grown from a small grassroots initiative to a 
                  recognized organization working across multiple African countries. Our approach 
                  combines traditional community engagement with innovative technology solutions 
                  to address the unique challenges faced by African women.
                </p>
                <p>
                  Today, we continue to expand our reach and impact, building partnerships with 
                  local organizations, governments, and international bodies to create sustainable 
                  change that lasts for generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
                alt="Women working together"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-primary opacity-10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FiUsers className="text-6xl mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold mb-4">
              Be Part of Our Mission
            </h2>
            <p className="text-xl mb-8 font-marcellus max-w-3xl mx-auto">
              Join us in creating lasting change for women across Africa. 
              Together, we can build a more equitable future.
            </p>
            <a
              href="mailto:info@womenlens.africa"
              className="bg-white text-primary px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Involved Today
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;