import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Instagram, Send, MapPin } from 'lucide-react';
import SplitText from './SplitText';
import emailjs from "emailjs-com";

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
      value: '+91 6282801350',
      href: 'tel:+916282801350',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 2,
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Email',
      value: 'kripashaji333@gmail.com',
      href: 'mailto:kripashaji333@gmail.com',
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
    console.log(formData);
    
    emailjs.send(
      "service_tyzbsrl",
      "template_mbp9w6d",
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      },
      "toMq7pfFeaDMZktjg"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Try again later.");
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-lime-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
          
          {/* Animated underline */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
          </motion.div>

          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Let's work together! Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Contact Information Cards */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact Information
            </motion.h3>
            
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 transition-all duration-500 overflow-hidden"
                whileHover={{
                  borderColor: "rgba(163, 230, 53, 0.5)",
                  boxShadow: "0 10px 40px rgba(163, 230, 53, 0.1)"
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 rounded-xl sm:rounded-2xl`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                  whileHover={{
                    translateX: "100%",
                    transition: { duration: 0.6 }
                  }}
                />
                
                <div className="relative flex items-center gap-3 sm:gap-4">
                  <motion.div
                    className={`p-3 sm:p-4 bg-gradient-to-br ${contact.color} rounded-lg sm:rounded-xl text-white flex-shrink-0`}
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {contact.icon}
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm mb-1">{contact.label}</p>
                    {contact.href ? (
                      <motion.a
                        href={contact.href}
                        className="text-white text-base sm:text-lg font-semibold break-all"
                        whileHover={{ 
                          color: "#a3e635",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {contact.value}
                      </motion.a>
                    ) : (
                      <p className="text-white text-base sm:text-lg font-semibold">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Send a Message
            </motion.h3>
            
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <label className="block text-gray-400 text-xs sm:text-sm font-medium mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name  "
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors text-sm sm:text-base"
                  whileFocus={{
                    borderColor: "#a3e635",
                    boxShadow: "0 0 0 3px rgba(163, 230, 53, 0.1)"
                  }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block text-gray-400 text-xs sm:text-sm font-medium mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors text-sm sm:text-base"
                  whileFocus={{
                    borderColor: "#a3e635",
                    boxShadow: "0 0 0 3px rgba(163, 230, 53, 0.1)"
                  }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block text-gray-400 text-xs sm:text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors resize-none text-sm sm:text-base"
                  whileFocus={{
                    borderColor: "#a3e635",
                    boxShadow: "0 0 0 3px rgba(163, 230, 53, 0.1)"
                  }}
                />
              </motion.div>
              
              <motion.button
                onClick={handleSubmit}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-lime-400 text-gray-300 hover:text-black font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg text-sm sm:text-base  overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  backgroundColor: "#84cc16",
                  boxShadow: "0 20px 40px rgba(163, 230, 53, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
Send Message
                

              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Connect With Me
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 transition-all duration-500 overflow-hidden block"
                variants={socialVariants}
                whileHover={{
                  borderColor: "rgba(163, 230, 53, 0.5)",
                  boxShadow: "0 20px 60px rgba(163, 230, 53, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 rounded-xl sm:rounded-2xl`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                  whileHover={{
                    translateX: "100%",
                    transition: { duration: 0.6 }
                  }}
                />
                
                <div className="relative flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    className={`mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-br ${social.gradient} rounded-xl text-white`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {social.icon}
                  </motion.div>
                  
                  {/* Platform name */}
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {social.name}
                  </h4>
                  
                  {/* Username */}
                  <motion.p
                    className="text-gray-400 text-xs sm:text-sm break-all"
                    whileHover={{ color: "#a3e635" }}
                  >
                    {social.username}
                  </motion.p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0"
                  whileHover={{
                    opacity: 1,
                    x: [0, 5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    x: { duration: 1, repeat: Infinity },
                    y: { duration: 1, repeat: Infinity }
                  }}
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 transform rotate-45" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          className="mt-12 sm:mt-14 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-500 text-xs sm:text-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2025 Kripa Shaji. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;