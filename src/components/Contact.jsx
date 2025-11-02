import  { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Send, MapPin } from 'lucide-react';
import SplitText from './SplitText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Phone',
      value: '+91 1234567890',
      href: 'tel:+911234567890',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 2,
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Email',
      value: 'kripa@example.com',
      href: 'mailto:kripa@example.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 3,
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Location',
      value: 'Kerala, India',
      href: null,
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Github className="w-6 h-6 sm:w-7 sm:h-7" />,
      name: 'GitHub',
      username: '@kripashaji',
      href: 'https://github.com/kripashaji',
      color: 'hover:bg-gray-700',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 2,
      icon: <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />,
      name: 'LinkedIn',
      username: 'kripashaji',
      href: 'https://linkedin.com/in/kripashaji',
      color: 'hover:bg-blue-600',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 3,
      icon: <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />,
      name: 'Instagram',
      username: '@kripashaji',
      href: 'https://instagram.com/kripashaji',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500',
      gradient: 'from-purple-500 via-pink-500 to-orange-500'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-lime-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 mb-3 sm:mb-4 tracking-wider">
            
                              <SplitText
                    text="GET IN TOUCH"
                    className="text-lime-400 inline-block cursor-pointer hover:scale-105 transition-transform duration-300"
                    delay={80}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 50, rotationX: -90 }}
                    to={{ opacity: 1, y: 0, rotationX: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                    textAlign="center"
                    tag="span"
                  />
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Let's work together! Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
              Contact Information
            </h3>
            
            {contactInfo.map((contact) => (
              <div
                key={contact.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-lime-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-lime-400/10 active:scale-95"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative flex items-center gap-3 sm:gap-4">
                  <div className={`p-3 sm:p-4 bg-gradient-to-br ${contact.color} rounded-lg sm:rounded-xl text-white transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                    {contact.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm mb-1">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-white text-base sm:text-lg font-semibold hover:text-lime-400 transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white text-base sm:text-lg font-semibold">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
              Send a Message
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-400 text-xs sm:text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs sm:text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs sm:text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors resize-none text-sm sm:text-base"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-lime-400/50 text-sm sm:text-base"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
            Connect With Me
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-lime-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-lime-400/20 active:scale-95"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative flex flex-col items-center">
                  {/* Icon */}
                  <div className={`mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-br ${social.gradient} rounded-xl text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {social.icon}
                  </div>
                  
                  {/* Platform name */}
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {social.name}
                  </h4>
                  
                  {/* Username */}
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-lime-400 transition-colors break-all">
                    {social.username}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 transform rotate-45" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 Kripa Shaji. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;