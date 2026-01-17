"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Everything around you that you call LIFE was made up by people no smarter than you. And you can change it, you can influence it.",
    name: "Steve Jobs",
    designation: "Co-founder of Apple Inc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    name: "Bill Gates",
    designation: "Co-founder of Microsoft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/800px-Bill_Gates_2017_%28cropped%29.jpg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    name: "Martin Fowler",
    designation: "Author and Software Engineer",
    image: "https://martinfowler.com/mf.jpg",
    color: "from-emerald-500 to-teal-500"
  },
  {
    quote: "In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    name: "Mark Zuckerberg",
    designation: "Co-founder of Meta (Facebook)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    color: "from-orange-500 to-red-500"
  },
  {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    name: "Dennis Ritchie",
    designation: "Creator of C and Unix",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/800px-Dennis_Ritchie_2011.jpg",
    color: "from-indigo-500 to-purple-500"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    name: "Elon Musk",
    designation: "CEO of Tesla and SpaceX",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    color: "from-red-500 to-yellow-500"
  },
  {
    quote: "I think it is possible for ordinary people to choose to be extraordinary.",
    name: "Jensen Huang",
    designation: "CEO of NVIDIA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KJ4crE3sSOKycZvMVbOUkcT6frdZ1Yu3CwRDV3SOxePt19pO3Tgv8aSCFHmqatMqua97jZk0pNBGLjtYHSBwWgFFWQYw77sJ4AHa3jw_&s=10",
    color: "from-green-500 to-emerald-500"
  },
  {
    quote: "Our industry does not respect tradition - it only respects innovation.",
    name: "Satya Nadella",
    designation: "CEO of Microsoft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/800px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
    color: "from-blue-600 to-indigo-600"
  },
  {
    quote: "If you're not failing every now and again, it's a sign you're not doing anything very innovative.",
    name: "Sundar Pichai",
    designation: "CEO of Google and Alphabet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yCvijqno3xOQS3aTgyHMddaaP1hJqkE-gjixaaxEV934hM-5cV1qTFUQRcONPYiC_8nyXnKh8izfOP-VXIyinA1F9VqsrBKEs28SI9coeQ&s=10",
    color: "from-yellow-500 to-orange-500"
  },
  {
    quote: "Empathy is at the heart of the designer's practice.",
    name: "Tim Cook",
    designation: "CEO of Apple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmRSo-E4W-4HQtWawioM2TevwSqL5TXxq9KqOEHBRhsh4tuqNRgxqZ79TpHjJaFIEWrrDirGueYRepY-OI39iGzKiv2ykdnSb5zy53SpXDw&s=10https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Tim_Cook_2024.jpg/800px-Tim_Cook_2024.jpg",
    color: "from-slate-500 to-gray-600"
  },
  {
    quote: "The advance of technology is based on making it fit in so that you don't really even notice it.",
    name: "Lisa Su",
    designation: "CEO of AMD",
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTG3gLo8lWJPo-3nIQQ7fhAQqSDMhvYjlsaupuGjGD40edLjMeS_GCrwuWX40Yczy96ypuAlPEOeJ29Md4l6W46As_C8D0omRP6-kJuO8qOHzuvk7n8s2M7EPX1jAmqz_XeIyUu4F5Z508&s=19",
    color: "from-pink-500 to-rose-500"
  },
  {
    quote: "Don't be afraid to make a mistake. But make sure you don't make the same mistake twice.",
    name: "Jack Ma",
    designation: "Co-founder of Alibaba",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDf_PmoyzbCSWyTDuWhM3e4-F2gp-IO5V5qDTKqxKNoLrpXwJTyAkIlo8PsaVG-Y_uC5NcxA-E-69ZE8tUjZ0Jn7QomqZCTax4x5QZdbAIqQ&s=10",
    color: "from-orange-600 to-red-600"
  },
  {
    quote: "The most important thing is to try and inspire people so that they can be great at whatever they want to do.",
    name: "Kobe Bryant",
    designation: "Basketball Legend & Entrepreneur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kobe_Bryant_8.jpg/800px-Kobe_Bryant_8.jpg",
    color: "from-purple-600 to-yellow-500"
  },
  {
    quote: "Stay hungry, stay foolish.",
    name: "Steve Wozniak",
    designation: "Co-founder of Apple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxWA1wvC1HQfFseNamrqSdcDUclQhxIknsQ9rnHVcXB0D0hXZC9t2pbNBSSyqpqWYmfwPa1EiXK32x9OA415kGV60HTriW6-JEcrt1-wJ&s=10",
    color: "from-cyan-500 to-blue-500"
  },
  {
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    name: "Jeff Bezos",
    designation: "Founder of Amazon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/800px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    color: "from-amber-500 to-orange-600"
  },
  {
    quote: "I don't look to jump over 7-foot bars: I look around for 1-foot bars that I can step over.",
    name: "Warren Buffett",
    designation: "Chairman of Berkshire Hathaway",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/800px-Warren_Buffett_KU_Visit.jpg",
    color: "from-green-600 to-teal-600"
  },
  {
    quote: "The power of imagination makes us infinite.",
    name: "Sheryl Sandberg",
    designation: "Former COO of Meta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuM1TDT5mq2cmVx3t22DQJsSbpb5bT3Ia2QIkuXXulzbmP1rEWaEC21aJrOcWasfwRDVF43nJk62PSC02fT7fRL1YLntmEVFZAokzPpO6Dqg&s=10",
    color: "from-pink-600 to-purple-600"
  },
  {
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    name: "Larry Page",
    designation: "Co-founder of Google",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/800px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
    color: "from-red-500 to-pink-500"
  },
  {
    quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
    name: "Sergey Brin",
    designation: "Co-founder of Google",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7cKAtAZYGhdTGYfmHxlhIKIGmhpGochz6e4fgudcLkH02VBH-BTD7MM9UYbPMhx-XlxJRpIw8qBJ2aHe0rU9pk3lt-sM_nOmKa7Q-GntTw&s=10",
    color: "from-blue-500 to-purple-500"
  },
  {
    quote: "We're changing the world with technology.",
    name: "Susan Wojcicki",
    designation: "Former CEO of YouTube",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWynlthjWJD7oX0ymTeF7dg1A5n3JJQIhyg_clT8qQZsXUmrTO-L12JRuzPoPkHbg8zrxD9qR38DDjQHyg0XmvjS8sV1I6McZqqaQRr_2&s=10",
    color: "from-red-600 to-pink-600"
  }
];

export default function AnimatedTestimonialsDemo() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

const goTo = (index: number) => {
  setCurrent(index);
  setIsAutoPlaying(false);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Words of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Wisdom</span>
          </h2>
          <p className="text-slate-300 text-lg">From the minds that shaped technology</p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image Section */}
              <div className="relative flex-shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[current].color} rounded-full blur-2xl opacity-50 animate-pulse`}></div>
                <div className="relative">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/20 shadow-xl transition-all duration-500"
                  />
                  <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${testimonials[current].color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="relative">
                  <p className="text-white text-xl md:text-2xl leading-relaxed mb-6 font-light italic">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {testimonials[current].name}
                    </h3>
                    <p className={`text-lg bg-gradient-to-r ${testimonials[current].color} bg-clip-text text-transparent font-medium`}>
                      {testimonials[current].designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/10 backdrop-blur-xl hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/10 backdrop-blur-xl hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? 'w-12 h-3 bg-gradient-to-r from-purple-400 to-pink-400'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-12 grid grid-cols-5 md:grid-cols-10 gap-3 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`relative group transition-all duration-300 ${
                current === index ? 'scale-110' : 'scale-90 opacity-50 hover:opacity-100'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity`}></div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`w-full aspect-square rounded-full object-cover border-2 transition-all duration-300 ${
                  current === index ? 'border-white' : 'border-white/30'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}