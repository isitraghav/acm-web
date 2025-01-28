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
        linkedin: "https://www.linkedin.com/in/prakhar5/",
        email: "prakharkumar.srivastava.22cse@bmu.edu.in",
        instagram: "https://www.instagram.com/prakhar_5_/",
      },
      {
        name: "Divyansh Verma",
        image: "/images/TeamNew/divyansh.webp",
        position: "Club Secretary",
        linkedin: "",
        email: "",
        instagram: "",
      },
      {
        name: "Ananya Aggarwal",
        image: "/images/TeamNew/Ananya.webp",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/ananya-aggarwal-769618268",
        email: "ananya.aggarwal.22cse@bmu.edu.in",
        instagram: "https://www.instagram.com/_ananya.021/",
      },
    ],
    "SR Representatives": [
      {
        name: "Guneet Chawla",
        image: "/images/TeamNew/Guneet.webp",
        position: "Sr. Representative",
        linkedin: "https://www.linkedin.com/in/guneetchawla",
        email: "Guneet.chawla.22cse@bmu.edu.in",
        instagram: "https://www.instagram.com/chawla.guneeet",
      },
      {
        name: "Dakshi Arora",
        image: "/images/TeamNew/dakshi.webp",
        position: "Sr. Representative",
        linkedin: "https://linkedin.com/in/dakshi-arora/",
        email: "dakshi.arora.22cse@bmu.edu.in",
        instagram: "https://www.instagram.com/dakshi.arora/",
      },
    ],
    Technical: [
      {
        name: "Sejal Gupta",
        image: "/images/TeamNew/sejal.webp",
        position: "Technical Team",
        linkedin: "https://www.linkedin.com/in/sejal-gupta-943832291/",
        email: "sejal.gupta.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/_sejal05_/",
      },
      {
        name: "Gaurav Ghosh",
        image: "/images/TeamNew/gaurav.webp",
        position: "Technical Team",
        linkedin: "https://www.linkedin.com/in/gaurav-ghosh-9531132b3",
        email: "gaurav.ghosh.23cse@bmu.edu.in",
        instagram: "",
      },
      {
        name: "Yash Upadhayay",
        image: "/images/TeamNew/yash.webp",
        position: "Technical Team",
        linkedin: "https://www.linkedin.com/in/yash-upadhyay-6ba156233",
        email: "yash.upadhayay.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/yash_upd0777/",
      },
    ],
    Marketing: [
      {
        name: "Shreya Khandelwal",
        image: "/images/TeamNew/Shreya.webp",
        position: "Marketing Team",
        linkedin: "https://www.linkedin.com/in/shreya-khandelwal-78a591281/",
        email: "shreya.khandelwal.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/_khandelwal_shreya/",
      },
      {
        name: "Vanshika Valecha",
        image: "/images/TeamNew/Vanshika.webp",
        position: "Marketing Team",
        linkedin: "https://www.linkedin.com/in/vanshikab93468320",
        email: "vanshika.valecha.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/vanshikav._31/",
      },
      {
        name: "Molly Srivastava",
        image: "/images/TeamNew/molly.webp",
        position: "Marketing Team",
        linkedin: "https://www.instagram.com/molly.srivastava",
        email: "molly.srivastava.23bmi@bmu.edu.in",
        instagram: "https://www.instagram.com/molly.srivastava",
      },
    ],
    Operations: [
      {
        name: "Vanshita Mehta",
        image: "/images/TeamNew/vanshita.webp",
        position: "Operations Team",
        linkedin: "https://www.linkedin.com/in/vanshita-mehta-195bab2bb",
        email: "vanshita.mehta.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/vanxshita._/",
      },
      {
        name: "Purvanshu Dhariwal",
        image: "/images/TeamNew/purvanshu.webp",
        position: "Operations Team",
        linkedin: "https://www.linkedin.com/in/purvanshu-dhariwal-762026300",
        email: "purvanshu.dhariwal.23bmi@bmu.edu.in",
        instagram: "https://www.instagram.com/_purvanshu/",
      },
      {
        name: "Tanmay Gupta",
        image: "/images/TeamNew/tanmay.webp",
        position: "Operations Team",
        linkedin: "https://www.linkedin.com/in/tanmay-gupta-b337012b5",
        email: "tanmay.gupta.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/gintokip/",
      },
    ],
    Creatives: [
      {
        name: "Kavya Goswami",
        image: "/images/TeamNew/Kavya.webp",
        position: "Creatives Team",
        linkedin: "https://www.linkedin.com/in/kavya-goswami-39a8442ab/",
        email: "kavya.goswami.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/kavyagoswami751/",
      },
      {
        name: "Nimish Katara",
        image: "/images/TeamNew/nimish.webp",
        position: "Creatives Team",
        linkedin: "https://www.linkedin.com/in/nimish-katara-460622283",
        email: "nimish.katara.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/nimish_katara/",
      },
      {
        name: "Suvansh Sehgal",
        image: "/images/TeamNew/Suvansh.webp",
        position: "Creatives Team",
        linkedin: "https://www.linkedin.com/in/suvansh-sehgal-721a6831b",
        email: "suvansh.sehgal.23cse@bmu.edu.in",
        instagram:
          "https://www.instagram.com/invites/contact/?igsh=1dt6y14vtmqd9&utm_content=382h39",
      },
    ],
    "Workshop & PR": [
      {
        name: "Akriti Bansal",
        image: "/images/TeamNew/Akriti.webp",
        position: "Workshop & PR Team",
        linkedin: "https://www.linkedin.com/in/akriti-bansal-600a372b2",
        email: "akriti.bansal.23cse@bmu.edu.in",
        instagram: "https://www.instagram.com/akriti_1305_/",
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
              image: "/images/TeamNew/shrey.webp",
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
        <div className="w-9/12 mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-center"
          >
            {team[active].map((item, index) => (
              <motion.div
                key={index}
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
