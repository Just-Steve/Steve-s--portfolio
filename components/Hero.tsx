"use client";
import React, { useState, useEffect } from "react";
import SteveImg from "../public/assets/images/steveimg.jpeg";
import Link from "next/link";

const Hero = () => {
  const [currentLang, setCurrentLang] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const greetings = [
    {
      text: "Hi, I'm Steve, a Full Stack Web Developer",
      lang: "English",
      flag: "🇺🇸",
    },
    {
      text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack",
      lang: "Swahili",
      flag: "🇰🇪",
    },
    {
      text: "Hola, soy Steve, desarrollador web Full Stack",
      lang: "Spanish",
      flag: "🇪🇸",
    },
    {
      text: "Bonjour, je suis Steve, développeur web Full Stack",
      lang: "French",
      flag: "🇫🇷",
    },
    {
      text: "你好，我是 Steve，一名全栈 Web 开发者",
      lang: "Chinese",
      flag: "🇨🇳",
    },
    {
      text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack",
      lang: "Swahili",
      flag: "🇰🇪",
    },
    {
      text: "नमस्ते, मैं Steve हूँ, एक फुल स्टैक वेब डेवलपर",
      lang: "Hindi",
      flag: "🇮🇳",
    },
    { text: "مرحباً، أنا ستيف، مطور ويب متكامل", lang: "Arabic", flag: "🇸🇦" },
    {
      text: "Hi, I'm Steve, a Full Stack Web Developer",
      lang: "English",
      flag: "🇺🇸",
    },
    {
      text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack",
      lang: "Swahili",
      flag: "🇰🇪",
    },
    {
      text: "Olá, sou Steve, desenvolvedor web Full Stack",
      lang: "Portuguese",
      flag: "🇧🇷",
    },
    {
      text: "Привет, я Стив, Full Stack веб-разработчик",
      lang: "Russian",
      flag: "🇷🇺",
    },
    {
      text: "こんにちは、私はスティーブです。フルスタックWeb開発者です",
      lang: "Japanese",
      flag: "🇯🇵",
    },
    {
      text: "Hallo, ich bin Steve, Full-Stack-Webentwickler",
      lang: "German",
      flag: "🇩🇪",
    },
    {
      text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack",
      lang: "Swahili",
      flag: "🇰🇪",
    },
    {
      text: "Hi, I'm Steve, a Full Stack Web Developer",
      lang: "English",
      flag: "🇺🇸",
    },
    {
      text: "Salut, je suis Steve, développeur web Full Stack",
      lang: "Romanian",
      flag: "🇷🇴",
    },
    {
      text: "Ciao, sono Steve, sviluppatore web Full Stack",
      lang: "Italian",
      flag: "🇮🇹",
    },
    {
      text: "안녕하세요, 저는 Steve입니다. 풀스택 웹 개발자입니다",
      lang: "Korean",
      flag: "🇰🇷",
    },
    {
      text: "Hej, jag är Steve, Full Stack-webbutvecklare",
      lang: "Swedish",
      flag: "🇸🇪",
    },
    {
      text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack",
      lang: "Swahili",
      flag: "🇰🇪",
    },
    {
      text: "Hallo, ik ben Steve, Full Stack webontwikkelaar",
      lang: "Dutch",
      flag: "🇳🇱",
    },
    {
      text: "Hi, I'm Steve, a Full Stack Web Developer",
      lang: "English",
      flag: "🇺🇸",
    },
    {
      text: "Merhaba, ben Steve, Full Stack web geliştiricisiyim",
      lang: "Turkish",
      flag: "🇹🇷",
    },
    {
      text: "Γεια σας, είμαι ο Steve, Full Stack Web Developer",
      lang: "Greek",
      flag: "🇬🇷",
    },
    {
      text: "Sawubona, ngingu Steve, umthuthukisi wewebhu we-Full Stack",
      lang: "Zulu",
      flag: "🇿🇦",
    },
    { text: "שלום, אני סטיב, מפתח ווב Full Stack", lang: "Hebrew", flag: "🇮🇱" },
    {
      text: "Hi, I'm Steve, a Full Stack Web Developer",
      lang: "English",
      flag: "🇺🇸",
    },
    {
      text: "Xin chào, tôi là Steve, lập trình viên web Full Stack",
      lang: "Vietnamese",
      flag: "🇻🇳",
    },
    {
      text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack",
      lang: "Swahili",
      flag: "🇰🇪",
    },
    {
      text: "สวัสดี ผมชื่อ Steve เป็นนักพัฒนาเว็บแบบ Full Stack",
      lang: "Thai",
      flag: "🇹🇭",
    },
    {
      text: "Kamusta, ako si Steve, isang Full Stack Web Developer",
      lang: "Filipino",
      flag: "🇵🇭",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
    backgroundImage: `url(${SteveImg.src})`,        }}
      />

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-gray-900/50 to-black/50" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Cursor glow effect */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Bouncing Balloons */}
      <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-gradient-to-br from-gray-800 to-green-900/40 rounded-full blur-2xl animate-balloon-1" />
      <div className="absolute bottom-0 right-[15%] w-80 h-80 bg-gradient-to-br from-black to-green-800/30 rounded-full blur-2xl animate-balloon-2" />
      <div className="absolute bottom-0 left-[20%] w-72 h-72 bg-gradient-to-br from-gray-900 to-emerald-900/40 rounded-full blur-2xl animate-balloon-3" />
      <div className="absolute bottom-0 left-[50%] w-96 h-96 bg-gradient-to-br from-gray-800/80 to-green-700/30 rounded-full blur-3xl animate-balloon-4" />
      <div className="absolute bottom-0 right-[25%] w-64 h-64 bg-gradient-to-br from-black to-green-900/50 rounded-full blur-2xl animate-balloon-5" />
      <div className="absolute bottom-0 right-[5%] w-72 h-72 bg-gradient-to-br from-gray-900 to-teal-900/30 rounded-full blur-2xl animate-balloon-6" />
      <div className="absolute bottom-0 left-[5%] w-80 h-80 bg-gradient-to-br from-black to-emerald-800/40 rounded-full blur-3xl animate-balloon-7" />
      <div className="absolute bottom-0 right-[40%] w-68 h-68 bg-gradient-to-br from-gray-800 to-green-900/35 rounded-full blur-2xl animate-balloon-8" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Profile badge with language rotation */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-purple-500/50 transition-all duration-300 group max-w-full">
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl sm:text-2xl shadow-lg">
              {greetings[currentLang].flag}
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black" />
          </div>

          <div className="flex flex-col min-w-0 flex-1">
            <div className="text-white font-medium text-xs sm:text-sm overflow-hidden h-5 sm:h-6">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentLang * 20}px)` }}
              >
                {greetings.map((greeting, i) => (
                  <div key={i} className="h-7 sm:h-8 flex items-center truncate">
                    {greeting.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-purple-400 text-[12px] sm:text-xs flex items-center gap-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
              </svg>
              {greetings[currentLang].lang}
            </div>
          </div>
        </div>

        {/* Main headline with gradient text */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center mb-4 sm:mb-6 max-w-5xl leading-tight px-2">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-gradient">
            Building Scalable &
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligent Web Solutions
          </span>
        </h1>

        {/* Subtitle with animated words */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-300 max-w-3xl px-4">
          <span>with</span>
          <span className="relative group">
            <span className="relative z-10 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack Development
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all" />
          </span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.7-6.3 4.7 2.3-7-6-4.6h7.6z" />
          </svg>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12 px-4 max-w-2xl">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm backdrop-blur-sm hover:bg-purple-500/20 transition-all">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="whitespace-nowrap">Scalable Architecture</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm backdrop-blur-sm hover:bg-cyan-500/20 transition-all">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="whitespace-nowrap">Performance Optimized</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs sm:text-sm backdrop-blur-sm hover:bg-pink-500/20 transition-all">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.7-6.3 4.7 2.3-7-6-4.6h7.6z" />
            </svg>
            <span className="whitespace-nowrap">AI-Powered Solutions</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md px-4">
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2">
                            <Link href="/#projects">See My Work</Link>

              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/5 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
                <Link href="/#contact">Contact Me</Link>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 text-center max-w-3xl px-4">
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Projects Delivered
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Client Satisfaction
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Support Available
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes balloon-1 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(30px) scale(0.8);
          }
        }
        @keyframes balloon-2 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(-40px) scale(0.75);
          }
        }
        @keyframes balloon-3 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(20px) scale(0.85);
          }
        }
        @keyframes balloon-4 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(-25px) scale(0.7);
          }
        }
        @keyframes balloon-5 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(35px) scale(0.8);
          }
        }
        @keyframes balloon-6 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(-30px) scale(0.75);
          }
        }
        @keyframes balloon-7 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(40px) scale(0.85);
          }
        }
        @keyframes balloon-8 {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-120vh) translateX(-20px) scale(0.8);
          }
        }

        .animate-balloon-1 {
          animation: balloon-1 9s ease-in infinite;
        }
        .animate-balloon-2 {
          animation: balloon-2 9s ease-in infinite;
        }
        .animate-balloon-3 {
          animation: balloon-3 9s ease-in infinite;
        }
        .animate-balloon-4 {
          animation: balloon-4 9s ease-in infinite;
        }
        .animate-balloon-5 {
          animation: balloon-5 9s ease-in infinite;
        }
        .animate-balloon-6 {
          animation: balloon-6 9s ease-in infinite;
        }
        .animate-balloon-7 {
          animation: balloon-7 9s ease-in infinite;
        }
        .animate-balloon-8 {
          animation: balloon-8 9s ease-in infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;