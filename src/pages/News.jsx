import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiTag, FiArrowRight } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import { format } from 'date-fns';

const News = () => {
  const { content } = useContent();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Programs', 'Partnerships', 'Events', 'Success Stories'];

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
              News & Updates
            </h1>
            <p className="text-xl font-marcellus max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest initiatives, success stories, and 
              developments in women's empowerment across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-marcellus font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-marcellus font-bold text-gray-900 mb-8 text-center">
              Featured Story
            </h2>
            {content.news.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img
                    src={content.news[0].image}
                    alt={content.news[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <FiCalendar size={16} />
                        <span className="font-marcellus text-sm">
                          {format(new Date(content.news[0].date), 'MMMM dd, yyyy')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiTag size={16} />
                        <span className="font-marcellus text-sm">Programs</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-marcellus font-bold text-gray-900 mb-4">
                      {content.news[0].title}
                    </h3>
                    <p className="text-gray-600 font-marcellus text-lg leading-relaxed mb-6">
                      {content.news[0].content}
                    </p>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-marcellus font-semibold hover:bg-accent transition-colors inline-flex items-center space-x-2">
                      <span>Read Full Story</span>
                      <FiArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-marcellus font-bold text-gray-900 text-center">
              Latest News
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.news.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span className="font-marcellus text-sm">
                        {format(new Date(article.date), 'MMM dd, yyyy')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiTag size={14} />
                      <span className="font-marcellus text-sm">Events</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-marcellus font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-marcellus mb-4 line-clamp-3">
                    {article.content}
                  </p>
                  <button className="text-primary font-marcellus font-semibold hover:text-accent transition-colors inline-flex items-center space-x-1">
                    <span>Read More</span>
                    <FiArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Additional News Items */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800"
                alt="Digital Training Success"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <FiCalendar size={14} />
                    <span className="font-marcellus text-sm">Jan 05, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiTag size={14} />
                    <span className="font-marcellus text-sm">Success Stories</span>
                  </div>
                </div>
                <h3 className="text-lg font-marcellus font-bold text-gray-900 mb-3">
                  100 Women Complete Digital Skills Training
                </h3>
                <p className="text-gray-600 font-marcellus mb-4">
                  Celebrating the graduation of 100 women from our comprehensive digital 
                  skills training program in rural Uganda...
                </p>
                <button className="text-primary font-marcellus font-semibold hover:text-accent transition-colors inline-flex items-center space-x-1">
                  <span>Read More</span>
                  <FiArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800"
                alt="Community Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <FiCalendar size={14} />
                    <span className="font-marcellus text-sm">Dec 28, 2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiTag size={14} />
                    <span className="font-marcellus text-sm">Events</span>
                  </div>
                </div>
                <h3 className="text-lg font-marcellus font-bold text-gray-900 mb-3">
                  Community Leadership Workshop Series
                </h3>
                <p className="text-gray-600 font-marcellus mb-4">
                  Our monthly leadership workshops continue to empower women with 
                  essential skills for community development...
                </p>
                <button className="text-primary font-marcellus font-semibold hover:text-accent transition-colors inline-flex items-center space-x-1">
                  <span>Read More</span>
                  <FiArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 font-marcellus max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates 
              about our programs and impact.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 font-marcellus focus:outline-none"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-r-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default News;