import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';

const Team = () => {
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
              Our Team
            </h1>
            <p className="text-xl font-marcellus max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals driving change and empowering women 
              across Africa through dedication, expertise, and unwavering commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              Our experienced leaders bring diverse backgrounds and shared vision 
              for women's empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-marcellus font-bold">{member.name}</h3>
                    <p className="font-marcellus">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-marcellus mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <FiMail size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <FiLinkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <FiTwitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              The esteemed team providing strategic guidance and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ruth Nagudi",
                role: "Media & Communications, Gender Policy Expert",
                image: "./images/RuthNagudi.JPG"
              },
              {
                name: "Beth Nakayenze",
                role: "Head of Programs",
                image: "./images/BethNakayenze.jpg"
              },
              {
                name: "Kathy Namutenze",
                role: "Finance & Admin Officer",
                image: "./images/Karthy.JPG"
              },
              {
                name: "Jeninah Nalukenge",
                role: "Projects Officer",
                image: "./images/JeninahNalukenge.JPG"
              },
              {
                name: "Lorna Nagawa",
                role: "Project Manager",
                image: "./images/LornaNagawa1.JPG"
              },
              {
                name: "Karen Namutenze",
                role: "Project Associate",
                image: "./images/KarenNamutenze.JPG"
              }
            ].map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-marcellus font-bold text-gray-900 mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-gray-600 font-marcellus">{advisor.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              We're always looking for passionate individuals to join our team 
              and contribute to women's empowerment across Africa.
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
                <FiMail className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-3">
                Full-time Positions
              </h3>
              <p className="text-gray-600 font-marcellus mb-4">
                Join our core team and make a lasting impact on women's empowerment.
              </p>
              <a
                href="mailto:careers@womenlens.africa"
                className="text-primary font-marcellus font-semibold hover:text-accent transition-colors"
              >
                View Openings
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-3">
                Volunteer Opportunities
              </h3>
              <p className="text-gray-600 font-marcellus mb-4">
                Contribute your skills and time to support our programs and initiatives.
              </p>
              <a
                href="mailto:volunteer@womenlens.africa"
                className="text-primary font-marcellus font-semibold hover:text-accent transition-colors"
              >
                Get Involved
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-marcellus font-bold text-gray-900 mb-3">
                Internships
              </h3>
              <p className="text-gray-600 font-marcellus mb-4">
                Gain valuable experience while contributing to meaningful change.
              </p>
              <a
                href="mailto:internships@womenlens.africa"
                className="text-primary font-marcellus font-semibold hover:text-accent transition-colors"
              >
                Apply Now
              </a>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 font-marcellus max-w-3xl mx-auto">
              Whether you're looking for a career change or want to contribute your skills, 
              we'd love to hear from you.
            </p>
            <a
              href="mailto:info@womenlens.africa"
              className="bg-white text-primary px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;