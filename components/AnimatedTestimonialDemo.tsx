import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import Title from "./Title";
import BGates from '../public/assets/images/BGates.jpeg'
import Zuck from '../public/assets/images/Zuck.jpeg'
import Jobs from '../public/assets/images/SteveJ.jpeg'
import DenisR from '../public/assets/images/DennisR.jpeg'
import MartinF from '../public/assets/images/MartinF.jpeg'

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Everything around you that you call LIFE was made up by people no smarter than you. And you can change it, you can influence it.",
      name: "Steve Jobs",
      designation: "Co-founder of Apple Inc.",
      src: Jobs.src ,
    },
    {
      quote:
        "Measuring progress by lines of code is like measuring aircraft progress by weight.",
      name: "Bill Gates",
      designation: "Co-founder of Microsoft",
      src: BGates.src,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      name: "Martin Fowler",
      designation: "Author and Software Engineer",
      src: MartinF.src,
    },
    {
      quote:
        "In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
      name: "Mark Zuckerberg",
      designation: "Co-founder of Facebook",
      src: Zuck.src,
    },
    {
      quote:
        "The only way to learn a new programming language is by writing programs in it. ",
      name: "Dennis Ritchie",
      designation: "Co-creator of C and Unix",
      src: DenisR.src,
    },
  ];

  return (
    <div className="min-h-screen px-4 lg:px-16 xl:px-32 mb-8 ">
        <Title text="popular" coverText="QUOTES" />
        <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}
