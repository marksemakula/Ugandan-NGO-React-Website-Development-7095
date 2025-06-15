import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { FiFilter, FiDownload, FiTrendingUp, FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter';
import { useContent } from '../context/ContentContext';

const Impact = () => {
  const { content } = useContent();
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const chartOptions = {
    title: {
      text: 'Women Trained Over Time',
      left: 'center',
      textStyle: {
        fontFamily: 'Marcellus',
        fontSize: 18,
        color: '#374151'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 180, 220, 300, 280, 350, 400, 380, 420, 450],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#FF6700',
        width: 3
      },
      itemStyle: {
        color: '#FF6700'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(255, 103, 0, 0.3)'
          }, {
            offset: 1, color: 'rgba(255, 103, 0, 0.05)'
          }]
        }
      }
    }]
  };

  const programDistribution = {
    title: {
      text: 'Program Distribution',
      left: 'center',
      textStyle: {
        fontFamily: 'Marcellus',
        fontSize: 18,
        color: '#374151'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [{
      type: 'pie',
      radius: '60%',
      data: [
        { value: 35, name: 'Digital Skills' },
        { value: 25, name: 'Leadership' },
        { value: 20, name: 'Economic Empowerment' },
        { value: 20, name: 'Health & Wellness' }
      ],
      itemStyle: {
        color: function(params) {
          const colors = ['#FF6700', '#F97316', '#FB923C', '#FED7AA'];
          return colors[params.dataIndex];
        }
      }
    }]
  };

  const geographicReach = {
    title: {
      text: 'Geographic Reach',
      left: 'center',
      textStyle: {
        fontFamily: 'Marcellus',
        fontSize: 18,
        color: '#374151'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['Kampala', 'Jinja', 'Mbale', 'Gulu', 'Mbarara', 'Arua'],
      axisLabel: {
        rotate: 45
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [650, 420, 380, 290, 350, 180],
      type: 'bar',
      itemStyle: {
        color: '#FF6700'
      }
    }]
  };

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
              Our Impact
            </h1>
            <p className="text-xl font-marcellus max-w-3xl mx-auto leading-relaxed">
              Measuring our progress and celebrating the transformative impact 
              we're making in women's lives across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Impact at a Glance
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              Real numbers, real impact, real change in communities across Africa
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
              <p className="text-gray-600 font-marcellus mt-2 text-lg">Women Trained</p>
              <p className="text-sm text-gray-500 font-marcellus mt-1">Since 2020</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiTarget className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.programAreas} />
              <p className="text-gray-600 font-marcellus mt-2 text-lg">Program Areas</p>
              <p className="text-sm text-gray-500 font-marcellus mt-1">Active Programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiAward className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.communities} />
              <p className="text-gray-600 font-marcellus mt-2 text-lg">Communities Served</p>
              <p className="text-sm text-gray-500 font-marcellus mt-1">Across Uganda</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <FiTrendingUp className="text-primary text-4xl mx-auto mb-4" />
              <AnimatedCounter end={content.impact.partnerships} />
              <p className="text-gray-600 font-marcellus mt-2 text-lg">Partnerships</p>
              <p className="text-sm text-gray-500 font-marcellus mt-1">Strategic Alliances</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <FiFilter className="text-gray-600" />
              <span className="font-marcellus font-medium text-gray-700">Filter by:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 font-marcellus focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="all">All Years</option>
              </select>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 font-marcellus focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Metrics</option>
                <option value="training">Training Programs</option>
                <option value="economic">Economic Impact</option>
                <option value="community">Community Development</option>
              </select>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-accent transition-colors flex items-center space-x-2">
              <FiDownload size={16} />
              <span>Export Data</span>
            </button>
          </div>
        </div>
      </section>

      {/* Charts Dashboard */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <ReactECharts option={chartOptions} style={{ height: '400px' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <ReactECharts option={programDistribution} style={{ height: '400px' }} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 bg-white p-6 rounded-lg shadow-lg"
          >
            <ReactECharts option={geographicReach} style={{ height: '400px' }} />
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-marcellus font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 font-marcellus max-w-3xl mx-auto">
              Behind every number is a story of transformation and empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <img
                  src="./images/RuthNagudi.JPG"
                  alt="Success Story"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-marcellus font-bold text-gray-900">Ruth Nagudi</h3>
                <p className="text-gray-600 font-marcellus">Digital Skills Graduate</p>
              </div>
              <p className="text-gray-600 font-marcellus text-center leading-relaxed">
                "The digital skills training transformed my life. I now run my own online business 
                and employ three other women from my community."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <img
                  src="./images/BethNakayenze.jpg"
                  alt="Success Story"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-marcellus font-bold text-gray-900">Beth Nakayenze</h3>
                <p className="text-gray-600 font-marcellus">Leadership Program Alumni</p>
              </div>
              <p className="text-gray-600 font-marcellus text-center leading-relaxed">
                "Through the leadership program, I gained the confidence to run for local council. 
                I'm now representing women's interests in my district."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <img
                  src="./images/JeninahNalukenge.JPG"
                  alt="Success Story"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-marcellus font-bold text-gray-900">Jeninah Nalukenge</h3>
                <p className="text-gray-600 font-marcellus">Microfinance Beneficiary</p>
              </div>
              <p className="text-gray-600 font-marcellus text-center leading-relaxed">
                "The microfinance support helped me expand my tailoring business. 
                I've increased my income by 300% and can now support my children's education."
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
              Be Part of Our Impact
            </h2>
            <p className="text-xl mb-8 font-marcellus max-w-3xl mx-auto">
              Join us in creating measurable change and empowering more women 
              across Africa to reach their full potential.
            </p>
            <a
              href="mailto:info@womenlens.africa"
              className="bg-white text-primary px-8 py-3 rounded-lg font-marcellus font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Support Our Mission
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Impact;