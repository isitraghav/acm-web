"use client";
import BlurText from "@/components/BlurText";
import EventTile from "@/components/EventTile";
import LogoWall from "@/components/LogoWall";
import SpotlightCard from "@/components/SpotlightCard";
import Squares from "@/components/Squares";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { Jersey_10, Jersey_15 } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: ["400"],
});

const jersey10 = Jersey_10({
  variable: "--font-jersey-10",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  let imgs = [
    "https://ucarecdn.com/ab1a0625-a3b6-4b4c-aded-83ad3c5baa17/-/preview/800x800/",
    "https://ucarecdn.com/11542f20-beeb-4655-9edb-ee10843bcc5b/-/preview/800x800/",
    "https://ucarecdn.com/f14d9813-23b1-42ce-bba3-590135547017/-/preview/800x800/",
    "https://ucarecdn.com/d4954fe2-abe6-4184-8c25-e988ca3a0516/-/preview/800x800/",
    "https://ucarecdn.com/7dcddb39-d414-4813-a69d-20b6a34c461e/-/preview/800x800/",
    "https://ucarecdn.com/60287bff-4c6f-4dac-8931-9249e6eb7a37/-/preview/800x800/",
  ];

  // Preload images
  useEffect(() => {
    imgs.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, [imgs]);
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: { opacity: 0, filter: "blur(10px)" },
    enter: { opacity: 1, filter: "blur(0px)" },
    leave: { opacity: 0, filter: "blur(10px)" },
    config: { duration: 500 },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: " From Origins to Epic Collaborations",
      author: "Shrey Jaiswal",
      date: "2024-10-07",
      excerpt:
        "Explore the vibrant world of open source, where collaboration fuels innovation and community drives growth. Discover the origins of this movement and how tools like Git and GitHub revolutionize the way developers work together",
      readTime: "4 min read",
      tags: ["Git", "Github", "Hacktoberfest", "Open-Source", "Linux"],
      category: "Open Source",
      link: "https://medium.com/@acm_63296/your-complete-guide-to-open-source-from-origins-to-epic-collaborations-beecccf9c2bf",
    },
    {
      id: 2,
      title: " Zero Trust Security: The Future of Cyber Defense",
      author: "Kavya Goswami",
      date: "2025-1-22",
      excerpt:
        "Zero Trust Security, introduced by John Kindervag in 2010, ensures continuous verification of users, limited access via micro-segmentation, and automated threat responses. Vital for industries like healthcare and government, it’s essential in today’s evolving cybersecurity landscape.",
      readTime: "3 min read",
      tags: [
        "CyberSecurity",
        "DataProtection",
        "NetworkSecurity",
        "ContinuousAuthentication",
        "ThreatDetection ",
      ],
      category: "Cyber Defense",
      link: "https://medium.com/@acm_63296/the-key-to-keeping-your-data-truly-safe-unlocking-the-zero-trust-security-model-d2fdecc5b2ee",
    },
    {
      id: 3,
      title: " How UX Design Drives Engagement and Success",
      author: "Purvanshu",
      date: "2025-1-29",
      excerpt:
        "UX design goes beyond interfaces, focusing on user perception, motivation, and minimizing cognitive load. By leveraging principles like visual hierarchy, gamification, and simplicity, designers create engaging, intuitive experiences that drive satisfaction, retention, and profitability.",
      readTime: "4 min read",
      tags: [
        "UX Design",
        "User Engagement",
        "Cognitive Load",
        "Gamification",
        "Human-Centered Design ",
      ],
      category: "UX/UI Design",
      link: "https://medium.com/@acm_63296/why-ux-design-is-all-about-understanding-the-human-mind-7a598898629f",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-4 p-3">
        <section className="relative glass w-full md:w-2/3 lg:w-3/4 h-[75vh] md:h-[84vh] rounded-[30px]">
          <Squares
            speed={0.3}
            squareSize={44}
            direction="diagonal"
            borderColor="#2d2e30"
            hoverFillColor="#222"
            children={
              <>
                <div className="absolute bg-[#06060648] inset-0 flex items-center justify-center">
                  <div className="flex flex-col gap-3 text-center">
                    <div className={`${jersey15.className} m-auto`}>
                      <BlurText
                        text="code the future."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-[#7C66B9] text-4xl md:text-6xl"
                      />
                    </div>
                    <div className={`px-3 w-full m-auto ${jersey15.className}`}>
                      <div className="flex justify-center items-center">
                        <BlurText
                          text="The largest Computer Science community at BMU."
                          delay={110}
                          animateBy="words"
                          direction="top"
                          className="text-xl md:text-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </section>
        <div className="w-full md:w-1/3 lg:w-1/4 h-[84vh] flex flex-col gap-4">
          <section className="flex flex-col glass h-[53vh] rounded-[30px] p-4">
            <h1>
              <BlurText
                text="Events"
                delay={110}
                animateBy="letters"
                direction="top"
                className="text-2xl"
              />
            </h1>
            <div className="mt-2 flex flex-col gap-2 overflow-scroll">
              {[
                {
                  name: "ROCS",
                  dateTime: "February 1, 2025 11:00 PM",
                  url: "/rocs",
                  description:
                    "Get ready for university's first-ever Research Event with speakers and PhD holders showcasing their research. Join us for cool insights.",
                },
                {
                  name: "SIH 2024",
                  dateTime: "September 2024",
                  url: "/event/sih",
                  description:
                    "The Smart India Hackathon internal round at our university was a remarkable success, marked by enthusiastic participation and exceptional coordination between judges and members, all dedicated to driving technological innovation.",
                },
                {
                  name: "Hello World",
                  dateTime: "September 2024",
                  url: "/event/hello-world",
                  description:
                    "Hello World celebrated the essence of coding by introducing each team member of our tech club in a vibrant and interactive session, embodying the spirit of a beginner's first programming milestone.",
                },
                {
                  name: "Engineering Excellence",
                  dateTime: "September 2024",
                  url: "/event/engineering-excellence",
                  description:
                    "An esteemed alumnus from ServiceNow returned to share his inspiring journey to success, engaging with students in an interactive session that included valuable insights and guidance on navigating their own paths.",
                },
                {
                  name: "GitQuest",
                  dateTime: "October 2024",
                  url: "/event/gitquest",
                  description:
                    "GitQuest emphasized the importance of open-source contributions through Hacktoberfest and Git, equipping participants with the skills to collaborate on community-driven projects and enhance their coding capabilities.",
                },
                {
                  name: "UI/UXify",
                  dateTime: "October 2024",
                  url: "/event/ui-uxify",
                  description:
                    "In the UI/UXify event, a guest speaker discussed the vital role of UI/UX design, highlighting its impact on user engagement and the vast opportunities in the design field. Participants left with a deeper understanding of how effective design can transform products.",
                },
                {
                  name: "General Meeting",
                  url: "/event/general-meeting",
                  dateTime: "October 2024",
                  description:
                    "During the recent ACM General Meeting, members shared insightful feedback on past events and their overall experience. They also discussed exciting upcoming activities, ensuring our community continues to thrive!",
                },
                {
                  name: "Links 4 Geeks",
                  dateTime: "November 2024",
                  url: "/event/links-4-geeks",
                  description:
                    "The event was a huge success! Participants showcased their coding prowess in Duality, leveled up their Git skills in GitQuest 2.0, explored valuable resources in Toolbox Unlocked, and enhanced their digital profiles in Polish Your Presence. A day full of learning, fun, and tech vibes!",
                },
                {
                  name: "Let's Talk Research",
                  dateTime: "November 2024",
                  url: "/event/lets-talk-research",
                  description:
                    "Let's Talk Research was a dynamic event highlighting the importance and scope of research. Additionally, it marked the inauguration of ROCS (Research Opportunities in Computer Science), a larger initiative designed to advance research activities and foster collaboration among aspiring researchers.",
                },
              ].map((event, index) => {
                return (
                  <div key={index}>
                    <EventTile index={index} event={event} />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex glass h-1/3 rounded-[30px] relative overflow-hidden">
            <Link
              href="/gallery"
              className="w-full h-full object-cover rounded-[25px]"
            >
              {transitions((style, i) => (
                <animated.div
                  key={i}
                  src={imgs[i]}
                  style={style}
                  alt="logo"
                  className="absolute inset-0 h-full w-full object-cover rounded-[25px]"
                >
                  <img
                    src={imgs[i]}
                    alt="logo"
                    className="absolute inset-0 h-full w-full object-cover rounded-[25px]"
                  />
                </animated.div>
              ))}
            </Link>
          </section>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center"></section>
      <div className="flex flex-col items-center justify-center overflow-hidden bg-[#4d3f77] cursor-not-allowed transition-all duration-500 rounded-xl m-3">
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className={`flex animate-marquee ${jersey10.className}`}>
            {Array(50)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="mx-2 text-2xl">
                  not your average club
                </span>
              ))}
          </div>
        </div>
      </div>

      <section>
        <div className="flex flex-col justify-center px-4 pt-3">
          <div className="text-4xl font-bold p-3 pb-4">Blog</div>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="mb-4">
                <SpotlightCard spotlightColor="#4d3f77">
                  <h1
                    className={`text-2xl ${jersey15.className} font-bold mb-2`}
                  >
                    {post.title}
                  </h1>
                  <p className="text-sm mb-2 line-clamp-4">{post.excerpt}</p>
                  <div className="mt-4 mb-2">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={post.link}
                      className="glass flex justify-center items-center gap-2 p-2 rounded-xl"
                    >
                      <div className="pl-3">Read</div>
                      <MdArrowOutward size={20} />
                    </Link>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
