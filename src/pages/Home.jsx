import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiTarget, FiAward, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter';
import { useContent } from '../context/ContentContext';

const Home = () => {
  const { content } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images data
  const carouselImages = [
    {
      src: "/images/BethNakayenze.jpg",
      alt: "Women empowerment workshop",
      caption: "Leadership training for women entrepreneurs"
    },
    {
      src: "/images/RuthNagudi.JPG",
      alt: "Community meeting",
      caption: "Community engagement sessions"
    },
    {
      src: "/images/JeninahNalukenge.JPG",
      alt: "Education program",
      caption: "Education and skills development"
    },
    {
      src: "/images/KathyNamutenze.JPG",
      alt: "Health initiative",
      caption: "Health and wellness programs"
    },
    {
      src: "/images/RuthNagudi.JPG",
      alt: "Technology training",
      caption: "Digital skills for women"
    },
    {
      src: "/images/BethNakayenze.jpg",
      alt: "Agriculture project",
      caption: "Sustainable agriculture initiatives"
    },
    {
      src: "/images/JeninahNalukenge.JPG",
      alt: "Networking event",
      caption: "Women networking and mentorship"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

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

            {/* Carousel Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full min-h-[400px] w-full"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                {/* Slides */}
                <div className="relative h-full w-full">
                  {carouselImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 w-full h-full overflow-hidden"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.1,
                        zIndex: index === currentSlide ? 10 : 0
                      }}
                      transition={{ 
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover min-h-[400px]"
                        loading="lazy"
                        initial={{ scale: 1.1 }}
                        animate={{ 
                          scale: 1,
                          transition: {
                            duration: 8,
                            ease: "linear"
                          }
                        }}
                        style={{ transformOrigin: 'center center' }}
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                          <p className="font-marcellus text-lg">{image.caption}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-primary rounded-full p-2 z-20 hover:bg-opacity-80 transition-all"
                  aria-label="Previous slide"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-primary rounded-full p-2 z-20 hover:bg-opacity-80 transition-all"
                  aria-label="Next slide"
                >
                  <FiChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-6' : 'bg-white bg-opacity-50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
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