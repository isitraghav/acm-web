"use client";

import Image from "next/image";

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
          <p className="text-center w-full text-xs md:text-md px-2 py-1.5 glass rounded-t-none rounded-[20px] md:rounded-[30px] md:absolute bottom-0">
            {item.name}
          </p>
        </div>
      </div>
    </div>
  );
}
