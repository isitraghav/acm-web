"use client";
import BlurText from "@/components/BlurText";
import Countdown from "@/components/Countdown";
import EventTile from "@/components/EventTile";
import Squares from "@/components/Squares";
import { Jersey_15, Kanit } from "next/font/google";
import Image from "next/image";

const jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: ["400"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row mt-3 gap-4 p-3 h-[90vh]">
      <section className="relative glass w-full md:w-2/3 lg:w-3/4 h-[80vh] md:h-auto rounded-[30px]">
        <Squares
          speed={0.3}
          squareSize={44}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#2d2e30"
          hoverFillColor="#222"
          children={
            <>
              <div className="absolute bg-[#06060648] inset-0 flex items-center justify-center">
                <div className="flex flex-col gap-3 text-center">
                  <div
                    className={`${jersey15.className} m-auto`}
                    // onClick={(e) => {
                    //   document.write("💦💦💦");
                    // }}
                  >
                    <BlurText
                      totalAnimationDelay={4000}
                      text="code the future."
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-[#7C66B9] text-4xl  md:text-6xl"
                    />
                  </div>
                  <div
                    className={`w-4/5 md:w-full m-auto ${jersey15.className}`}
                  >
                    <BlurText
                      totalAnimationDelay={4500}
                      text="The largest Computer Science community at BMU."
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-xl md:text-2xl"
                    />
                  </div>
                </div>
              </div>
            </>
          }
        />
      </section>
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <section className="flex flex-col glass h-2/3 rounded-[30px] p-4">
          <h1>
            <BlurText
              totalAnimationDelay={5000}
              text="Events"
              delay={150}
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
                url: "/event/rocs",
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
        <section className="flex glass h-1/3 rounded-[30px] p-2">
          <h1>
            <BlurText
              totalAnimationDelay={4000}
              text="Isn't this so cool?!"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
            />
          </h1>
        </section>
      </div>
    </div>
  );
}
