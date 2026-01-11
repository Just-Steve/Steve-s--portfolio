import React from 'react'
import { CardDemo } from './ui/CardDemo';
import Title from './Title';


const About = () => {
  return (
    <section className='min-h-screen px-4 lg:16 xl:px-32 lg:pt-8 ' id='about'>
      <div className='border-b border-b-white/10 rounded-[20px] pb-20'>
        <Title text='read more' coverText='ABOUT ME' className='text-center'/>

        <div className='flex flex-col lg:flex-row gap-8 mt-4'>
          <div>
            <CardDemo/>
          </div>

          <div className='flex flex-col gap-2 text-neutral-400 w-full mx-auto py-4 px-4 lg:-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'>
            <p>
<<<<<<< HEAD
              I’m Steve, a passionate <span className='text-neutral-200'>Junior Software Engineer</span> specializing in <span className='text-neutral-200'>Full Stack Web Development.</span> With a strong foundation in <span className='text-neutral-200'>MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) and expertise in <span className='text-neutral-200'>Next.js</span>, Tailwind CSS, and dynamic UI design, I craft intuitive, scalable, and efficient web applications
=======
              I’m Steve, a passionate <span className='text-neutral-200'>Junior Software Engineer</span> specializing in <span className='text-neutral-200'>Full Stack Web Development.</span> With a strong foundation in <span className='text-neutral-200'>MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) and expertise in <span className='text-neutral-200'>Next.js</span>, Tailwind CSS, and dynamic UI design, I craft intuitive, scalable, and efficient web applications
>>>>>>> 9076968 (Initial commit)
            </p>

            <p>
              I thrive on solving complex problems with clean, maintainable code, whether it’s designing seamless front-end experiences, optimizing back-end performance, or integrating <span className='text-neutral-200'>APIs</span> for robust functionality. My approach blends creativity with technical precision, ensuring every project delivers efficiency, scalability, and a great user experience.
            </p>

            <p>
             When I&apos;m not architecting solutions in code, I&apos;m either on the football field honing teamwork and strategy or diving into the latest tech deep-dives on YouTube. To stay ahead of the curve, I follow market trends and tech innovations through Bloomberg. My passion for technology extends into the community; I regularly contribute to open-source projects and participate in knowledge-sharing on platforms like Stack Overflow and LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default About