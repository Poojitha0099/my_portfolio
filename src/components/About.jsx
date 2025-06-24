/**
 * About page component (JSX)
 * @module About
 */

import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award } from 'lucide-react';
import aboutProfileImage from '../assets/about-profile.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F0] text-[#2C2C2C] px-8 lg:px-16 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* About Me Text */}
              <div className="lg:w-2/3">
                <h2 className="text-5xl font-bold mb-4">About Me</h2>
                <p className="text-xl text-[#8B7355] leading-relaxed">
                  Hi, I'm <span className="font-semibold text-[#2C2C2C]">Lakshmi Poojitha Inturi</span>, a Computer Science student with strong foundation in Data Structures and Algorithms using C++ and Python, practical knowledge in AI/ML integration, and hands-on development of smart software solutions. Experienced intern with leadership roles in student-led events and clubs. Currently pursuing B.Tech at Kalasalingam University, graduating in 2026.
                </p>
              </div>
              
              {/* Profile Image */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <motion.div
                    className="w-56 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={aboutProfileImage}
                      alt="Krishna Sri Varma Chekuri"
                      className="w-full h-full object-cover object-center"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-5 h-5 bg-[#D4AF37] rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#B8860B] rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two-Column Layout for Education and Work Experience */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Education Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen size={28} className="text-[#D4AF37]" />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">B.Tech, Computer Science Engineering</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-[#8B7355] mb-3">2022 - 2026</p>
                  <p className="text-[#8B7355] font-medium mb-3">CGPA: 8.10</p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Senior Secondary (XII)</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Sri Chaitanya College, Telangana State Board</p>
                  <p className="text-[#8B7355] mb-3">2022</p>
                  <p className="text-[#8B7355] font-medium mb-3">Percentage: 90.00%</p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Secondary (X)</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Dr.RLR, Telangana State Board</p>
                  <p className="text-[#8B7355] mb-3">2020</p>
                  <p className="text-[#8B7355] font-medium mb-3">Percentage: 100.00%</p>
                </div>
              </div>
            </motion.div>

            {/* Work Experience Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={28} className="text-[#D4AF37]" />
                <h3 className="text-3xl font-bold">Work Experience</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Technical Lead and Event Coordinator</h4>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">Scorecraft Club, KARE</p>
                  <p className="text-[#8B7355] mb-3">Jul 2024 - Present</p>
                  <p className="text-[#8B7355] text-sm leading-relaxed">
                    Organized and led GATE-focused technical events while managing technical operations to improve participant experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section Divider */}
          <div className="border-t border-[#E8E8E0] my-16"></div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <Award size={28} className="text-[#D4AF37]" />
              <h3 className="text-3xl font-bold">Achievements & Leadership</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "IBM ICE Day Hackathon - 1st Prize Winner 2023 & 2024",
                  issuer: "IBM",
                  date: "2023 & 2024",
                  description: `Secured 1st place in IBM ICE Day Hackathons for two consecutive years (2nd and 3rd year of B.Tech).\nLed innovative technical projects solving real-world problems under time constraints.\nDemonstrated strong teamwork, technical leadership, and problem-solving skills.`
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-[#E8E8E0]"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-[#2C2C2C]">{cert.title}</h4>
                    <span className="text-[#D4AF37] font-semibold">{cert.date}</span>
                  </div>
                  <p className="text-[#D4AF37] font-medium mb-2">{cert.issuer}</p>
                  <p className="text-[#8B7355] text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 