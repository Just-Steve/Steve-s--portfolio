import React from "react";
import { freelanx, lajest, portfolio1, portfolio2, portfolio3, tsaire, tausiApp } from "@/data";
import project1 from '../public/assets/images/project-1.png'
import project2 from '../public/assets/images/project-2.png'
import project3 from '../public/assets/images/project-3.png'
import project4 from '../public/assets/images/project-4.png'
import project5 from '../public/assets/images/project-5.png'
import project6 from '../public/assets/images/project-6.png'
import project7 from '../public/assets/images/project-7.png'

export const allProjectsCard = [
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
            A robust, production-ready platform for Tausi App Limited, built with Next.js for superior performance and server-side rendering. Engineered in TypeScript for maximum reliability and scalability, it delivers a polished user experience that empowers and connects Africa&apos;s beautiful community through innovative BeautyTech.
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
    title: "Latest Portfolio",
    src: project6,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/Steve-s--portfolio",
    ctaLink2: "https://steve-s-portfolio-x283.vercel.app/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A robust, production-ready portfolio powered by Next.js for server-side rendering and optimized performance. Written in TypeScript for enhanced type safety and scalability, this version delivers a polished user experience with cutting-edge UI design and SEO capabilities.
          </p>
          <div className="flex flex-wrap gap-2">
            {portfolio3?.map((item, index) => (
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
    title: "Perfect Clothes",
    src: project3,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/clothes-frontend",
    ctaLink2: "https://clothes-frontend.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A vibrant online platform dedicated to selling premium clothing and fashion accessories. With an intuitive interface, it offers a wide range of customizable products, highlighting quality materials and style options. Perfect for fashion-conscious customers seeking trendy, on-demand apparel.
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
    description: "Portfolio v1",
    title: "First Portfolio",
    src: project1,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/Steve",
    ctaLink2: "https://steves.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A minimalist portfolio showcasing core web development skills. Built with vanilla HTML, CSS, and JavaScript, this version focused on clean design, responsive layouts, and lightweight functionality to present projects effectively.
          </p>
          <div className="flex flex-wrap gap-2">
            {portfolio1?.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-800 dark:text-orange-200 text-xs font-medium rounded-full px-3 py-1.5 border border-orange-200 dark:border-orange-700 transition-all hover:scale-105"
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
    description: "Portfolio v2",
    title: "Second Portfolio",
    src: project5,
    ctaText: "View Code",
    ctaText2: "Live Preview",
    ctaLink: "https://github.com/Just-Steve/Steve----dev",
    ctaLink2: "https://steve-dev.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            An upgraded portfolio leveraging React for dynamic UI and Vite for fast development. Integrated Framer Motion for smooth animations and Tailwind CSS for rapid, utility-first styling. This version emphasized interactivity and modern design trends.
          </p>
          <div className="flex flex-wrap gap-2">
            {portfolio2?.map((item, index) => (
              <span 
                key={`${item.name}-${index}`} 
                className="bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full px-3 py-1.5 border border-indigo-200 dark:border-indigo-700 transition-all hover:scale-105"
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
            Lajest is a sleek and user-friendly application designed to display detailed device specifications in an intuitive format. Whether you&apos;re a tech enthusiast, developer, or casual user, Lajest provides a comprehensive overview of your device&apos;s hardware and software details, including processor, memory, storage, display, and operating system information.
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
    ctaLink2: "https://job-hunt-1d73.onrender.com/",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Freelanx is an innovative job platform designed to connect freelancers with projects that match their expertise. It features a user-friendly interface for discovering, applying, and managing freelance opportunities, enabling professionals to highlight their skills and businesses to efficiently source top talent.
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