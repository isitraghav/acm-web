"use client";
import TeamCard from "@/components/TeamCard";
import { Jersey_15 } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const Jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Team() {
  const team = {
    Executive: [
      {
        name: "Prakhar Srivastava",
        image: "/images/TeamNew/prakhar.webp",
        position: "Web Master",
      },
      {
        name: "Divyansh Verma",
        image: "/images/TeamNew/divyansh.webp",
        position: "Club Secretary",
      },
      {
        name: "Ananya Aggarwal",
        image: "/images/TeamNew/Ananya.webp",
        position: "Treasurer",
      },
    ],
    "SR Representatives": [
      {
        name: "Guneet Chawla",
        image: "/images/TeamNew/Guneet.webp",
        position: "Sr. Representative",
      },
      {
        name: "Dakshi Arora",
        image: "/images/TeamNew/dakshi.webp",
        position: "Sr. Representative",
      },
    ],
    Technical: [
      {
        name: "Sejal Gupta",
        image: "/images/TeamNew/sejal.webp",
        position: "Technical Team",
      },
      {
        name: "Gaurav Ghosh",
        image: "/images/TeamNew/gaurav.webp",
        position: "Technical Team",
      },
      {
        name: "Yash Upadhayay",
        image: "/images/TeamNew/yash.webp",
        position: "Technical Team",
      },
    ],
    Marketing: [
      {
        name: "Shreya Khandelwal",
        image: "/images/TeamNew/Shreya.webp",
        position: "Marketing Team",
      },
      {
        name: "Vanshika Valecha",
        image: "/images/TeamNew/Vanshika.webp",
        position: "Marketing Team",
      },
      {
        name: "Molly Srivastava",
        image: "/images/TeamNew/molly.webp",
        position: "Marketing Team",
      },
    ],
    Operations: [
      {
        name: "Vanshita Mehta",
        image: "/images/TeamNew/vanshita.webp",
        position: "Operations Team",
      },
      {
        name: "Purvanshu Dhariwal",
        image: "/images/TeamNew/purvanshu.webp",
        position: "Operations Team",
      },
      {
        name: "Tanmay Gupta",
        image: "/images/TeamNew/tanmay.webp",
        position: "Operations Team",
      },
    ],
    Creatives: [
      {
        name: "Kavya Goswami",
        image: "/images/TeamNew/Kavya.webp",
        position: "Creatives Team",
      },
      {
        name: "Nimish Katara",
        image: "/images/TeamNew/nimish.webp",
        position: "Creatives Team",
      },
      {
        name: "Suvansh Sehgal",
        image: "/images/TeamNew/Suvansh.webp",
        position: "Creatives Team",
      },
    ],
    "Workshop & PR": [
      {
        name: "Akriti Bansal",
        image: "/images/TeamNew/Akriti.webp",
        position: "Workshop & PR Team",
      },
    ],
  };

  const [active, setActive] = useState("Executive");

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar Section */}
      <div className="flex flex-col glass w-full md:w-1/2 lg:w-1/3 min-h-[83vh] rounded-[30px] p-4">
        <Section
          title="Mentors"
          members={[
            {
              name: "Dr. Devanjali Relan",
              image: "/images/TeamNew/DevanjaliMaam.webp",
              position: "Mentor",
            },
            {
              name: "Dr. Nishtha Phutela",
              image: "/images/TeamNew/NishthaMaam.webp",
              position: "Mentor",
            },
          ]}
        />
        <Section
          title="President and Vice President"
          members={[
            {
              name: "Aditya Rastogi",
              image: "/images/TeamNew/Aditya.webp",
              position: "President",
            },
            {
              name: "Shrey Jaiswal",
              image: "/images/TeamNew/Shrey.webp",
              position: "Vice President",
            },
          ]}
        />
      </div>

      {/* Team Section */}
      <div className="flex flex-col glass w-full md:w-1/2 lg:w-2/3 min-h-[83vh] rounded-[30px] p-4">
        {/* Animated Pill Buttons */}
        <motion.div layout className="flex flex-wrap gap-3 justify-center mt-2">
          {Object.keys(team).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative px-4 py-1 text-sm md:text-xl font-medium transition-all rounded-full ${
                active === key ? "bg-[#5c4c8a] text-white" : "glass"
              }`}
            >
              {active === key && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-[#5c4c8a] rounded-full"
                  transition={{ type: "spring", stiffness: 900, damping: 100 }}
                />
              )}
              <span className={`relative z-10 ${Jersey15.className}`}>
                {key}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Team Members with Animation */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center justify-center mt-4"
        >
          {team[active].map((item, index) => (
            <motion.div
              key={index}
              className="w-1/2 md:w-1/3 lg:w-1/4 h-min p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TeamCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* Section Component (Reusable) */
function Section({ title, members }) {
  return (
    <>
      <div
        className={`text-4xl ${Jersey15.className} text-[#7965b6] p-3 pb-0 pl-4 font-jersey-15`}
      >
        {title}
      </div>
      <div className="flex flex-wrap pb-1">
        {members.map((item, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/2 p-1 md:p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <TeamCard item={item} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
