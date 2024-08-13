"use client";

import React from "react";
import Image from "next/image";
import { GrCatalog } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { PiMailboxFill, PiPhoneFill } from "react-icons/pi";
import dynamic from "next/dynamic";
import Link from "next/link";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Nav() {
  return (
    <>
      <div className="fixed w-full z-20 max-sm:px-4 px-16 py-4 flex flex-row content-center items-center h-32">
        <Image
          alt="logo"
          className="w-auto inline-flex max-sm:w-20"
          height={72}
          width={150}
          src="https://res.cloudinary.com/labodegaltd/image/upload/v1723494448/quesosgallito/logotipomenu_333x227.png"
        />
        <div className="flex-auto" />
        <p className="max-sm:hidden w-auto text-white flex items-center">
          <span className="relative h-[32px] w-[32px] flex items-center justify-center mr-2">
            <Image
              alt="cheese-icon"
              className="absolute top-0"
              width={32}
              height={32}
              src="https://res.cloudinary.com/labodegaltd/image/upload/v1723496587/quesosgallito/cheese-icon-holder-a.png"
            />
            <PiPhoneFill className="z-10 text-xl text-[#0066b1]" />
          </span>
          (312) 243-2755
        </p>
        <div className="flex-auto" />
        <p className="max-sm:hidden w-auto text-white flex items-center">
          <span className="relative h-[32px] w-[32px] flex items-center justify-center mr-2">
            <Image
              alt="cheese-icon"
              className="absolute top-0"
              width={32}
              height={32}
              src="https://res.cloudinary.com/labodegaltd/image/upload/quesosgallito/cheese-icon-holder-b.png"
            />
            <MdEmail className="z-10 text-xl text-[#0066b1]" />
          </span>
          info@quesoselgallito.com
        </p>
        <div className="flex-auto" />
        <div className="flex-auto" />
        <Image
          alt="available-banner"
          className="transform  max-sm:scale-75 max-sm:translate-y-0 scale-150 translate-y-5"
          width={150}
          height={150}
          src="https://res.cloudinary.com/labodegaltd/image/upload/v1723565362/quesosgallito/available-hacienda-retailers.png"
        />
      </div>
      <button className="fixed bg-white z-20 shadow-[rgba(255,255,255,0.3)] shadow-xl px-6 py-4 rounded-full flex items-center bottom-10 right-32">
        <p>View Product Catalog</p>
        <GrCatalog className="ml-2" />
        <Link
          target="_blank"
          href="https://issuu.com/labodegaltd/docs/elgallito-cheese-dairy-2024-digital-catalog?fr=xGAEgASgBPf8zNelCO0OJWgZqOlgDGPTBQDvIdVBhwSY7FgbhCsH_BDIwMjLB_wIwNMH-TAT-QgZqOgT_Al9MBjoGyP4xbjtU"
          className="absolute top-0 left-0 w-full h-full"
        />
      </button>
      <div className="fixed flex z-20 justify-center bottom-4 right-12">
        <DynamicLottie
          animationData={require("../assets/UDm86U069p.json")}
          className="flex justify-center items-center w-8"
          loop={true}
        />
      </div>
    </>
  );
}
