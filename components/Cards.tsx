import React from "react";
import { freelanx, lajest, portfolio3, tsaire, tausiApp } from "@/data";
import project2 from '../public/assets/images/project-2.png'
import project3 from '../public/assets/images/project-3.png'
import project4 from '../public/assets/images/project-4.png'
import project6 from '../public/assets/images/project-6.png'
import project7 from '../public/assets/images/project-7.png'


export const cards = [
    {
      description: "Beauty Services Platform",
      title: "New Brand App Limited",
      src: project7,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://steve-ecommerce-static.onrender.com/auth/login/",
      ctaLink2: "/not-found",
      content: () => {
        return (
          <>
            <p>
              New Brand App Limited is a beauty services platform that connects users with a wide range of beauty professionals. It features a user-friendly interface for booking appointments, managing services, and providing a seamless experience for both customers and service providers.           
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                {
                  tausiApp?.map((item) => (
                    <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                  ))
                }
              </div>
          </>
          
        );
      },
    },
    {
      description: "v3",
      title: "Portforlio Site",
      src: project6,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://steve-s-portfolio-x283.vercel.app/",
      ctaLink2: "/not-found",
      content: () => {
        return (
          <>
            <p>
              A personal portfolio website showcasing my skills, projects, and professional journey. Built with Next.js and TypeScript, it features a modern design, responsive layout, and interactive elements to highlight my work and connect with potential clients or employers.           
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                {
                  portfolio3.map((item) => (
                    <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                  ))
                }
              </div>
          </>
          
        );
      },
    },
    {
      description: "Device Specs",
      title: "Tech Devices",
      src: project2,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://tech-devices-app.onrender.com/",
      ctaLink2: "https://github.com/Just-Steve/tech-devices",
      content: () => {
        return (
            <>
            <p>
            Tech Devices is a comprehensive platform for exploring and comparing the latest technology devices. It features detailed specifications, user reviews, and a user-friendly interface for discovering the best tech products available in the market.
           
            </p>
             <div className='grid grid-cols-4 w-full gap-2'>
                {
                  lajest?.map((item) => (
                    <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                  ))
                }
              </div>
          </>
        );
      },
    },
  
    {
      description: "Eccommerce",
      title: "clothing Store",
      src: project3,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://clothes-frontend.onrender.com/",
      ctaLink2: "https://github.com/Just-Steve/clothes-frontend",
      content: () => {
        return (
            <>
            <p>
              Tsaire is a dynamic e-commerce platform that offers a wide range of clothing and accessories. It features a user-friendly interface for browsing products, managing orders, and providing a seamless shopping experience. Tsaire is designed to connect customers with the latest fashion trends and styles.
            </p>
               <div className='grid grid-cols-4 w-full gap-2'>
                {
                  tsaire?.map((item) => (
                    <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                  ))
                }
              </div>
          </>
        );
      },
    },
    {
      description: "Job Platform",
      title: "Job Hunt",
      src: project4,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://job-hunt-app.onrender.com/",
      ctaLink2: "https://github.com/Just-Steve/job-hunt",
      content: () => {
        return (
            <>
            <p>
            Job Hunt is an innovative job platform designed to connect freelancers with projects that match their expertise. It features a user-friendly interface for discovering, applying, and managing freelance opportunities, enabling professionals to highlight their skills and businesses to efficiently source top talent.
            </p>
             <div className='grid grid-cols-4 w-full gap-2'>
                {
                  freelanx?.map((item) => (
                    <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                  ))
                }
              </div>
          </>
        );
      },
    },
  ];