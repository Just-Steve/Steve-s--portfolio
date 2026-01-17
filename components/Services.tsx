"use client";
import React from 'react';
import { Monitor, Code2, Layers, Globe, Code, Zap, ChevronUp, ChevronDown, Briefcase, Users } from 'lucide-react';

// Cyberpunk Portfolio Component
const ImagePlacePhoto = () => {
  const projects = [
    { title: "School Management System", tech: "React, Node.js, MongoDB", year: "2024" },
    { title: "E-Commerce Platform", tech: "Next.js, Stripe, PostgreSQL", year: "2024" },
    { title: "AI Chatbot Integration", tech: "Python, TensorFlow, React", year: "2025" },
    { title: "Mobile Fitness Tracker", tech: "React Native, Firebase", year: "2023" }
  ];

  return (
    <div className="w-full min-h-[600px] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg)'
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 text-white">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute w-48 h-48 bg-purple-500 rounded-full blur-3xl -top-24 -left-24 animate-pulse"></div>
          <div className="absolute w-48 h-48 bg-blue-500 rounded-full blur-3xl top-1/2 -right-24 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-48 h-48 bg-pink-500 rounded-full blur-3xl -bottom-24 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold">
              <span className="text-blue-400">{'{ }'}</span>
              <span className="ml-3 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">STACK</span>
            </div>
            
            <h1 className="text-2xl font-bold leading-tight">
              Building <span className="text-purple-400">Digital</span>{' '}
              <span className="text-blue-400">Solutions</span>
            </h1>
            
            <p className="text-gray-300 text-sm max-w-md mx-auto">
              Full-stack developer specializing in modern web technologies. I create scalable applications with clean code and exceptional user experiences.
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-purple-300">
              <Code size={14} />
              <span>Best Web Developer from Zetech University 2025  </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all">
              <Code className="text-purple-400 mb-1" size={20} />
              <div className="text-xl font-bold text-purple-400">2.5+</div>
              <div className="text-gray-400 text-xs">Years Coding</div>
            </div>
            
            <div className="p-3 bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-lg hover:border-blue-500 transition-all">
              <Briefcase className="text-blue-400 mb-1" size={20} />
              <div className="text-xl font-bold text-blue-400">30+</div>
              <div className="text-gray-400 text-xs">Projects</div>
            </div>
            
            <div className="p-3 bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg hover:border-purple-500 transition-all">
              <Users className="text-purple-400 mb-1" size={20} />
              <div className="text-xl font-bold text-purple-400">23+</div>
              <div className="text-gray-400 text-xs">Clients</div>
            </div>
            
            <div className="p-3 bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-lg hover:border-blue-500 transition-all">
              <Code className="text-blue-400 mb-1" size={20} />
              <div className="text-xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400 text-xs">Quality</div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-center">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience 2.8 / 2025</span>
            </h3>

            <div className="p-4 bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg">
              <h4 className="text-lg font-bold mb-2">Steve dev</h4>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                I'm a passionate Full Stack Developer with over 3 years of experience in building scalable web applications.
              </p>

              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-purple-400">Work History</h5>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-900/70 border border-purple-500/20 rounded">
                    <div className="font-semibold text-xs">Junior Developer - TechCorp</div>
                    <div className="text-xs text-gray-400">2023 - Present</div>
                  </div>
                  <div className="p-2 bg-gray-900/70 border border-purple-500/20 rounded">
                    <div className="font-semibold text-xs">Full Stack Developer - StartupXYZ</div>
                    <div className="text-xs text-gray-400">2021 - 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-center">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">School Projects</span>
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {projects.map((project, index) => (
                <div key={index} className="group p-3 bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Code className="text-white" size={16} />
                    </div>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                  <h4 className="text-sm font-bold mb-1 group-hover:text-purple-400 transition-colors">{project.title}</h4>
                  <p className="text-gray-400 text-xs">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-center text-purple-400">Tech Stack</h3>
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <div className="p-3 bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#61DAFB">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xs">React</div>
                    <div className="text-xs text-gray-400">Frontend</div>
                  </div>
                </div>
              </div>

              <div className="text-xl text-purple-400">+</div>

              <div className="p-3 bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#E34F26">
                      <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xs">Node.js</div>
                    <div className="text-xs text-gray-400">Backend</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-purple-500/30 text-center">
            <p className="text-gray-400 text-xs">© 2025 Stack.Dev - Building the Future</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock components
const Title = ({ text, coverText, className }) => (
  <div className={className}>
    <span className="text-gray-500 text-sm uppercase tracking-wider">{text}</span>
    <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
      {coverText}
    </h2>
  </div>
);

const Services = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -200, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 200, behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Monitor,
      title: "Front-End Development",
      description: "I create responsive, intuitive user interfaces using modern frameworks like React, Next.js, and Tailwind CSS to ensure a seamless user experience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Back-End Development",
      description: "I build secure, scalable APIs and server-side applications with Node.js, Express, Python & Django, and databases like MongoDB.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Layers,
      title: "Full-Stack Solutions",
      description: "From concept to deployment, I deliver end-to-end web applications, integrating front-end and back-end for a cohesive product.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Need a unique solution? I develop tailored applications to meet your business needs, from e-commerce to dashboards.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "API Integration & Development",
      description: "I integrate third-party APIs or build custom APIs to enhance functionality and connectivity.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "I optimize your web apps for speed, scalability, and SEO using tools like Lighthouse and Next.js optimizations.",
      gradient: "from-indigo-500 to-violet-500"
    }
  ];

  const skills = [
    "Front-End Development",
    "Back-End Development",
    "Full-Stack Solutions",
    "Custom Web Applications",
    "API Integration & Development",
    "Performance Optimization"
  ];

  return (
    <section className='min-h-screen px-4 xl:px-32 lg:pt-8 mb-6 bg-black text-white' id='services'>
      <div className='flex flex-col gap-12 pb-20'>
        <Title text='my' coverText='SERVICES' className='text-center' />
        
        <div className='mt-6 flex flex-col gap-12'>
          {/* Hero Section */}
          <div className='flex flex-col lg:flex-row gap-8 items-center'>
            <div className='flex-1 flex flex-col gap-6'>
              <div className='inline-block'>
                <h2 className='font-bold text-5xl lg:text-6xl mb-4'>
                  <span className='bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
                    Digital Solutions
                  </span>
                </h2>
                <div className='h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
              </div>
              
              <p className='text-gray-400 text-lg lg:text-xl leading-relaxed'>
                Transforming businesses with innovative, scalable web and app solutions that captivate users and drive success through cutting-edge technology.
              </p>

              <div className='grid grid-cols-2 gap-3'>
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className='group relative px-4 py-3 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg text-sm hover:border-gray-500 transition-all duration-300 cursor-default backdrop-blur-sm overflow-hidden'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500'></div>
                    <span className='relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                <a href='/#contact' className='flex-1 sm:flex-initial'>
                  <button className='w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'>
                    Hire Me
                  </button>
                </a>
                <a href='/allProjects' className='flex-1 sm:flex-initial'>
                  <button className='w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm'>
                    View Projects
                  </button>
                </a>
              </div>
            </div>

            {/* Scrollable Service Card */}
            <div className='flex-1 relative group'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
              
              {/* Card Container */}
              <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-2xl'>
                {/* Card Header */}
                <div className='bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-gray-700'>
                  <div className='flex items-center gap-3'>
                    <Code className='w-6 h-6 text-blue-400' />
                    <div>
                      <h3 className='text-lg font-semibold text-white'>Service Showcase</h3>
                      <p className='text-xs text-gray-400'>Interactive Preview</p>
                    </div>
                  </div>
                </div>

                {/* Scroll Up Button */}
                <button
                  onClick={scrollUp}
                  className='absolute top-20 right-4 z-20 bg-gray-800/90 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-600'
                  aria-label="Scroll up"
                >
                  <ChevronUp className='w-5 h-5' />
                </button>

                {/* Scrollable Content Area */}
                <div 
                  ref={scrollContainerRef}
                  className='h-[400px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-600'
                >
                  <ImagePlacePhoto />
                </div>

                {/* Scroll Down Button */}
                <button
                  onClick={scrollDown}
                  className='absolute bottom-16 right-4 z-20 bg-gray-800/90 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-600'
                  aria-label="Scroll down"
                >
                  <ChevronDown className='w-5 h-5' />
                </button>

                {/* Card Footer */}
                <div className='bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 border-t border-gray-700'>
                  <div className='flex items-center justify-between'>
                    <span className='text-xs text-gray-400'>Scroll to explore</span>
                    <div className='flex gap-1'>
                      <div className='w-2 h-2 rounded-full bg-red-500'></div>
                      <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
                      <div className='w-2 h-2 rounded-full bg-green-500'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className='group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 overflow-hidden'
                >
                  <div className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>
                  
                  <div className='relative z-10 flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className='text-2xl text-white' />
                      </div>
                      <h3 className='text-xl font-semibold'>{service.title}</h3>
                    </div>
                    
                    <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent'></div>
                    
                    <p className='text-gray-400 leading-relaxed'>
                      {service.description}
                    </p>
                  </div>

                  <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;