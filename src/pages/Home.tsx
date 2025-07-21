import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, Lightbulb, Target, ArrowRight, Users, Trophy, Clock } from 'lucide-react';

const Home = () => {
  const topics = [
    'Number System',
    'Time, Speed & Distance',
    'Time & Work',
    'Percentages',
    'Profit & Loss',
    'Ratio & Proportion',
    'Averages',
    'Data Interpretation',
    'Permutations & Combinations',
    'Logical Puzzles'
  ];

  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Practice Questions',
      description: 'Solve 100+ curated questions across all important topics',
      link: '/questions'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Comprehensive Notes',
      description: 'Detailed explanations and concepts for every topic',
      link: '/notes'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Quick Shortcuts',
      description: 'Time-saving tricks and formulas for competitive exams',
      link: '/shortcuts'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '10,000+', label: 'Students Helped' },
    { icon: <Trophy className="w-8 h-8" />, value: '95%', label: 'Success Rate' },
    { icon: <Clock className="w-8 h-8" />, value: '24/7', label: 'Available Access' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Aptitude with
              <span className="block text-yellow-300">AptitudeAce</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Your complete preparation platform for competitive exams. Practice questions, study comprehensive notes, and learn quick shortcuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/questions"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Start Practicing <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/notes"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Study Notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive study resources designed to help you excel in competitive exams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Asked Aptitude Topics
            </h2>
            <p className="text-xl text-gray-600">
              Focus on the topics that matter most for your success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 hover:border-blue-200 transition-colors duration-200"
              >
                <div className="text-center">
                  <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Aptitude Skills?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of successful candidates who have improved their aptitude scores with our platform.
          </p>
          <Link
            to="/questions"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;