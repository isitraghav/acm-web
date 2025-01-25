"use client";
import TeamCard from "@/components/TeamCard";
import { Jersey_15 } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-col md:flex-row gap-3 p-3">
      <div className="flex flex-col glass w-full md:w-1/2 lg:w-1/3 min-h-[83vh] rounded-[30px] ">
        <div
          className={`text-4xl text-[#7965b6] p-3 pb-0 pl-4 ${Jersey15.className}`}
        >
          Mentors
        </div>
        <div className="flex ">
          {[
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
          ].map((item, index) => (
            <div key={index} className=" p-1 md:p-2 w-full h-min">
              <TeamCard item={item} />
            </div>
          ))}
        </div>
        <div className="h-full"></div>
        <div
          className={`text-4xl text-[#7965b6] p-3 pb-0 pl-4 ${Jersey15.className}`}
        >
          President and Vice President
        </div>
        <div className="flex pb-1">
          {[
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
          ].map((item, index) => (
            <div key={index} className=" p-1 md:p-2 w-full h-min">
              <TeamCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col glass w-full md:w-1/2 lg:w-2/3  min-h-[83vh] rounded-[30px] ">
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {Object.keys(team).map((key, index) => (
            <div key={index} className="">
              <button
                onClick={() => {
                  setActive(key);
                }}
                style={
                  active === key
                    ? { color: "white", background: "#5c4c8a" }
                    : {}
                }
                className={`text-xl ${Jersey15.className} glass rounded-[20px] px-2`}
              >
                {key}
              </button>
            </div>
          ))}
          <div className="flex flex-wrap items-center justify-center">
            {team[active].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-1/2 md:w-1/3 lg:w-1/4 h-min p-1 md:p-2"
                >
                  <TeamCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
