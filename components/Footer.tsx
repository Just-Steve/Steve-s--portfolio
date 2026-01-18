import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  
  const SocialIcon = ({ type }) => {
    const iconClass = "w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-all duration-300";
    switch(type) {
      case 'github':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      default:
        return null;
    }
  };
  
  const socialLinks = [
    { 
      href: "https://github.com/Just-Steve/", 
      icon: "github",
      label: "GitHub"
    },
    { 
      href: "#linkedin", 
      icon: "linkedin",
      label: "LinkedIn"
    },
    { 
      href: "#twitter", 
      icon: "twitter",
      label: "Twitter/X"
    },
    { 
      href: "#instagram", 
      icon: "instagram",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className='relative mt-24 px-6 xl:px-12 py-24 bg-gradient-to-b from-neutral-950 to-black overflow-hidden'>
      {/* Enhanced gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none'/>
      
      {/* Decorative elements */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl'/>
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl'/>
      
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Brand */}
        <div className='mb-20 pb-16 border-b border-white/10'>
          <h2 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent leading-tight'>
            Steve dev
          </h2>
          <p className='text-gray-300 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light'>
            Building beautiful digital experiences with modern web technologies
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20'>
          
          {/* Quick Links */}
          <div>
            <h3 className='text-white font-bold mb-8 text-lg uppercase tracking-wider'>
              Explore
            </h3>
            <nav className='space-y-5'>
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className='block text-gray-300 hover:text-purple-400 transition-all duration-300 text-lg font-medium hover:translate-x-1'
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-bold mb-8 text-lg uppercase tracking-wider'>
              Get in Touch
            </h3>
            <div className='space-y-6'>
              <div className='flex items-center gap-4 text-gray-300 text-lg'>
                <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 5.746 7.597 16.403 7.597 16.403s7.597-10.657 7.597-16.403C19.597 3.399 16.198 0 12 0zm0 11.5c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                </svg>
                <span className='font-medium'>Nairobi, Kenya</span>
              </div>
              
              <a href="mailto:stevegchuhi03@gmail.com" className='flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-all duration-300 group text-lg'>
                <svg className="w-6 h-6 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
                <span className='break-all font-medium'>stevegchuhi03@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-white font-bold mb-8 text-lg uppercase tracking-wider'>
              Connect
            </h3>
            <div className='flex flex-wrap gap-4'>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='group relative w-14 h-14 flex items-center justify-center rounded-xl border-2 border-white/20 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50'
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
   
        {/* Bottom */}
        <div className='pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-base text-gray-400'>
          <p className='font-medium'>&copy; {date} Steve Dev. All rights reserved.</p>
          
          <div className='flex items-center gap-10'>
            <a href="#privacy" className='hover:text-purple-400 transition-colors font-medium text-base'>Privacy</a>
            <a href="#terms" className='hover:text-purple-400 transition-colors font-medium text-base'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer