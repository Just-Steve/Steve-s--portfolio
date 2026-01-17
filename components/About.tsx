import React from 'react';
import { Code2, Rocket, Users, TrendingUp } from 'lucide-react';

// Title component
const Title = ({ text, coverText, className }) => (
  <div className={className}>
    <span className="text-gray-500 text-sm uppercase tracking-wider">{text}</span>
    <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mt-2">
      {coverText}
    </h2>
  </div>
);

// CardDemo component - placeholder for your actual card
const CardDemo = () => (
  <div className='relative w-full lg:w-80 h-96 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden group'>
    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
    <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]'></div>
    <div className='relative z-10 h-full flex items-center justify-center p-8'>
      <div className='text-center'>
        <div className='w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl'>
          <Code2 className='w-16 h-16 text-white' />
        </div>
        <h3 className='text-2xl font-bold mb-2'>Steve</h3>
        <p className='text-gray-400'>Full Stack Developer</p>
        <div className='mt-4 text-sm text-gray-500'>
          Crafting seamless web experiences with MERN & Next.js stack.
          <p>Open Source Contributor | Tech Enthusiast | Next.js Specialist | MERN Stack Expert</p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const highlights = [
    { icon: Code2, label: "MERN Stack Expert", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, label: "Next.js Specialist", color: "from-purple-500 to-pink-500" },
    { icon: Users, label: "Open Source Contributor", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, label: "Tech Enthusiast", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className='min-h-screen px-4 lg:px-16 xl:px-32 lg:pt-8 bg-black text-white' id='about'>
      <div className='pb-20'>
        <Title text='read more' coverText='ABOUT ME' className='text-center mb-12'/>

        <div className='flex flex-col lg:flex-row gap-8 mt-4'>
          <div className='flex-shrink-0'>
            <CardDemo/>
          </div>

          <div className='flex-1 flex flex-col gap-6'>
            {/* Main Content Card */}
            <div className='relative group'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500'></div>
              <div className='relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-2xl'>
                <div className='flex flex-col gap-5 text-gray-300 leading-relaxed'>
                  <p className='text-lg'>
                    I'm <span className='text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Steve</span>, a passionate <span className='text-white font-semibold'>Junior Software Engineer</span> specializing in <span className='text-white font-semibold'>Full Stack Web Development.</span> With a strong foundation in <span className='text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) and expertise in <span className='text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Next.js</span>, Tailwind CSS, and dynamic UI design, I craft intuitive, scalable, and efficient web applications.
                  </p>

                  <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent'></div>

                  <p className='text-lg'>
                    I thrive on solving complex problems with clean, maintainable code, whether it's designing seamless front-end experiences, optimizing back-end performance, or integrating <span className='text-white font-semibold'>APIs</span> for robust functionality. My approach blends creativity with technical precision, ensuring every project delivers efficiency, scalability, and a great user experience.
                  </p>

                  <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent'></div>

                  <p className='text-lg'>
                    When I'm not architecting solutions in code, I'm either on the football field honing teamwork and strategy or diving into the latest tech deep-dives on YouTube. To stay ahead of the curve, I follow market trends and tech innovations through Bloomberg. My passion for technology extends into the community; I regularly contribute to open-source projects and participate in knowledge-sharing on platforms like Stack Overflow and LinkedIn.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 overflow-hidden'
                  >
                    <div className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>
                    <div className='relative z-10 flex flex-col items-center gap-2 text-center'>
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className='w-5 h-5 text-white' />
                      </div>
                      <span className='text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300'>
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;