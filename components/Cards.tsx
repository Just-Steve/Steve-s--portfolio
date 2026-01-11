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
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://steve-ecommerce-static.onrender.com/auth/login/",
    ctaLink2: "/not-found",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            New Brand App Limited is a beauty services platform that connects users with a wide range of beauty professionals. It features a user-friendly interface for booking appointments, managing services, and providing a seamless experience for both customers and service providers.
          </p>
          <div className="flex flex-wrap gap-2">
            {tausiApp?.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full px-3 py-1.5 border border-purple-200 dark:border-purple-700 transition-all hover:scale-105"
              >
                {item?.name}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    description: "Portfolio v3",
    title: "Portfolio Site",
    src: project6,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://steve-s-portfolio-x283.vercel.app/",
    ctaLink2: "/not-found",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A personal portfolio website showcasing my skills, projects, and professional journey. Built with Next.js and TypeScript, it features a modern design, responsive layout, and interactive elements to highlight my work and connect with potential clients or employers.
          </p>
          <div className="flex flex-wrap gap-2">
            {portfolio3.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full px-3 py-1.5 border border-blue-200 dark:border-blue-700 transition-all hover:scale-105"
              >
                {item?.name}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    description: "E-commerce Platform",
    title: "Clothing Store",
    src: project3,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/clothes-frontend",
    ctaLink2: "https://clothes-frontend.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Tsaire is a dynamic e-commerce platform that offers a wide range of clothing and accessories. It features a user-friendly interface for browsing products, managing orders, and providing a seamless shopping experience. Tsaire is designed to connect customers with the latest fashion trends and styles.
          </p>
          <div className="flex flex-wrap gap-2">
            {tsaire?.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 text-xs font-medium rounded-full px-3 py-1.5 border border-green-200 dark:border-green-700 transition-all hover:scale-105"
              >
                {item?.name}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    description: "Device Specs App",
    title: "Tech Devices",
    src: project2,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/tech-devices",
    ctaLink2: "https://tech-devices-app.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Tech Devices is a comprehensive platform for exploring and comparing the latest technology devices. It features detailed specifications, user reviews, and a user-friendly interface for discovering the best tech products available in the market.
          </p>
          <div className="flex flex-wrap gap-2">
            {lajest?.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 text-red-800 dark:text-red-200 text-xs font-medium rounded-full px-3 py-1.5 border border-red-200 dark:border-red-700 transition-all hover:scale-105"
              >
                {item?.name}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    description: "Job Platform",
    title: "Job Hunt",
    src: project4,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/job-hunt",
    ctaLink2: "https://job-hunt-app.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Job Hunt is an innovative job platform designed to connect freelancers with projects that match their expertise. It features a user-friendly interface for discovering, applying, and managing freelance opportunities, enabling professionals to highlight their skills and businesses to efficiently source top talent.
          </p>
          <div className="flex flex-wrap gap-2">
            {freelanx?.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full px-3 py-1.5 border border-teal-200 dark:border-teal-700 transition-all hover:scale-105"
              >
                {item?.name}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
];