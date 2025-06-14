import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';

const Projects = () => {
  const { content } = useContent();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-marcellus font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl font-marcellus max-w-3xl mx-auto leading-relaxed">
              Discover the transformative initiatives that are empowering women and 
              building stronger communities across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-marcellus font-semibold ${
                      project.status === 'Active' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-marcellus font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-marcellus text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <FiUsers size={16} />
                      <span className="font-marcellus text-sm">500+ Beneficiaries</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <FiMapPin size={16} />
                      <span className="font-marcellus text-sm">Uganda</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <FiCalendar size={16} />
                      <span className="font-marcellus text-sm">2024</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <FiTrendingUp size={16} />
                      <span className="font-marcellus text-sm">High Impact</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-3 rounded-lg font-marcellus font-semibold hover:bg-accent transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Project Impact Areas
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              Our projects span multiple sectors to create comprehensive empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-3">
                Skills Development
              </h3>
              <p className="text-gray-600 font-marcellus">
                Building technical and life skills for sustainable empowerment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-3">
                Economic Empowerment
              </h3>
              <p className="text-gray-600 font-marcellus">
                Creating pathways to financial independence and entrepreneurship
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-3">
                Community Development
              </h3>
              <p className="text-gray-600 font-marcellus">
                Strengthening communities through women's leadership
              </p>
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
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold mb-4">
              Support Our Projects
            </h2>
            <p className="text-xl mb-8 font-marcellus max-w-3xl mx-auto">
              Your support can help us expand our reach and create even greater impact 
              in communities across Africa.
            </p>
            <a
              href="mailto:info@womenlens.africa"
              className="bg-white text-primary px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;