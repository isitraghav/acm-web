"use client";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ item }) {
  return (
    <div className="w-full">
      <div className="glass w-full h-min rounded-[20px] overflow-hidden">
        <div className="relative flex flex-col md:flex-row w-full h-full justify-center items-center">
          <Image
            className="md:rounded-[20px]"
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
          />
          <div className="text-center w-full text-xs md:text-md px-2 py-1.5 glass rounded-t-none rounded-[20px] md:rounded-[30px] md:absolute bottom-0">
            <div>{item.name}</div>
            <div className="flex gap-2 justify-center">
              {item.instagram && (
                <Link href={item.instagram} target="_blank">
                  <AiFillInstagram size={25} className="inline-block" />
                </Link>
              )}
              {item.linkedin && (
                <Link href={item.linkedin} target="_blank">
                  <FaLinkedin size={22} className="inline-block" />
                </Link>
              )}
              {item.email && (
                <Link href={`mailto:${item.email}`} target="_blank">
                  <HiOutlineMail size={25} className="inline-block" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
