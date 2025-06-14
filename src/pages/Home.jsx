import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter';
import { useContent } from '../context/ContentContext';

const Home = () => {
  const { content } = useContent();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-marcellus font-bold mb-6">
                Empowering African Women Through Innovation
              </h1>
              <p className="text-xl mb-8 font-marcellus leading-relaxed">
                Women Lens Africa is dedicated to advancing gender equality and women's empowerment 
                across the continent through innovative programs and sustainable development initiatives.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/about"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
                >
                  Get Involved
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                alt="African women in leadership"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              See the tangible difference we're making in communities across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiUsers className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.womenTrained} suffix="+" />
              <p className="text-gray-600 font-marcellus mt-2">Women Trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiTarget className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.programAreas} />
              <p className="text-gray-600 font-marcellus mt-2">Program Areas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiAward className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.communities} />
              <p className="text-gray-600 font-marcellus mt-2">Communities Served</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiUsers className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.partnerships} />
              <p className="text-gray-600 font-marcellus mt-2">Strategic Partnerships</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Our Key Projects
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              Discover the initiatives that are transforming lives and communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-marcellus mb-4">
                    {project.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-marcellus ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="bg-primary text-white px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-accent transition-colors inline-flex items-center"
            >
              View All Projects <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-8 font-marcellus max-w-3xl mx-auto">
              Together, we can create a more equitable future for African women. 
              Get involved in our mission today.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Contact Us <FiArrowRight className="ml-2" />
              </Link>
              <a
                href="mailto:info@womenlens.africa"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;