"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";

import { Sparkles, Code2, Rocket, Globe, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentLang, setCurrentLang] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const greetings = [
  { text: "Hi, I'm Steve, a Full Stack Web Developer", lang: "English", flag: "🇺🇸" },
  { text: "Habari, mimi ni Steve, msanidi wa wavuti wa Full Stack", lang: "Swahili", flag: "🇰🇪" },
  { text: "Hola, soy Steve, desarrollador web Full Stack", lang: "Spanish", flag: "🇪🇸" },
  { text: "Bonjour, je suis Steve, développeur web Full Stack", lang: "French", flag: "🇫🇷" },
  { text: "你好，我是 Steve，一名全栈 Web 开发者", lang: "Chinese", flag: "🇨🇳" },
  { text: "नमस्ते, मैं Steve हूँ, एक फुल स्टैक वेब डेवलपर", lang: "Hindi", flag: "🇮🇳" },
  { text: "مرحباً، أنا ستيف، مطور ويب متكامل", lang: "Arabic", flag: "🇸🇦" },
  { text: "Olá, sou Steve, desenvolvedor web Full Stack", lang: "Portuguese", flag: "🇧🇷" },
  { text: "Привет, я Стив, Full Stack веб-разработчик", lang: "Russian", flag: "🇷🇺" },
  { text: "こんにちは、私はスティーブです。フルスタックWeb開発者です", lang: "Japanese", flag: "🇯🇵" },
  { text: "Hallo, ich bin Steve, Full-Stack-Webentwickler", lang: "German", flag: "🇩🇪" },
  { text: "Ciao, sono Steve, sviluppatore web Full Stack", lang: "Italian", flag: "🇮🇹" },
  { text: "안녕하세요, 저는 Steve입니다. 풀스택 웹 개발자입니다", lang: "Korean", flag: "🇰🇷" },
  { text: "Hej, jag är Steve, Full Stack-webbutvecklare", lang: "Swedish", flag: "🇸🇪" },
  { text: "Hallo, ik ben Steve, Full Stack webontwikkelaar", lang: "Dutch", flag: "🇳🇱" },
  { text: "Merhaba, ben Steve, Full Stack web geliştiricisiyim", lang: "Turkish", flag: "🇹🇷" },
  { text: "Γεια σας, είμαι ο Steve, Full Stack Web Developer", lang: "Greek", flag: "🇬🇷" },
  { text: "Sawubona, ngingu Steve, umthuthukisi wewebhu we-Full Stack", lang: "Zulu", flag: "🇿🇦" },
  { text: "שלום, אני סטיב, מפתח ווב Full Stack", lang: "Hebrew", flag: "🇮🇱" },
  { text: "Xin chào, tôi là Steve, lập trình viên web Full Stack", lang: "Vietnamese", flag: "🇻🇳" },
  { text: "สวัสดี ผมชื่อ Steve เป็นนักพัฒนาเว็บแบบ Full Stack", lang: "Thai", flag: "🇹🇭" },
  { text: "Kamusta, ako si Steve, isang Full Stack Web Developer", lang: "Filipino", flag: "🇵🇭" }
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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Cursor glow effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Profile badge with language rotation */}
        <div className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-purple-500/50 transition-all duration-300 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
              {greetings[currentLang].flag}
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
          </div>
          
          <div className="flex flex-col">
            <div className="text-white font-medium text-sm overflow-hidden h-6">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentLang * 24}px)` }}
              >
                {greetings.map((greeting, i) => (
                  <div key={i} className="h-6 flex items-center">
                    {greeting.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-purple-400 text-xs flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {greetings[currentLang].lang}
            </div>
          </div>
        </div>

        {/* Main headline with gradient text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 max-w-5xl leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-gradient">
            Building Scalable &
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligent Web Solutions
          </span>
        </h1>

        {/* Subtitle with animated words */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xl md:text-3xl mb-8 text-gray-300 max-w-3xl px-4">
          <span>with</span>
          <span className="relative group">
            <span className="relative z-10 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack Development
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all" />
          </span>
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 px-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm backdrop-blur-sm hover:bg-purple-500/20 transition-all">
            <Code2 className="w-4 h-4" />
            Scalable Architecture
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm backdrop-blur-sm hover:bg-cyan-500/20 transition-all">
            <Rocket className="w-4 h-4" />
            Performance Optimized
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm backdrop-blur-sm hover:bg-pink-500/20 transition-all">
            <Sparkles className="w-4 h-4" />
            AI-Powered Solutions
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center gap-2">
              <Link href='/#projects'>
                        See My Work
                </Link>

              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="group px-8 py-4 rounded-full font-semibold text-white border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/5">
            <span className="flex items-center gap-2">
              <Link href='/#contact'>
                        Contact Me
                </Link>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 text-center">
          <div className="group cursor-pointer">
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <div className="text-gray-400 text-sm md:text-base">Projects Delivered</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-gray-400 text-sm md:text-base">Client Satisfaction</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-gray-400 text-sm md:text-base">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;