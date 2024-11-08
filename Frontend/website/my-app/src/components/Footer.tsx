import Image from "next/image";
import React from "react";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";

const Footer = () => {
  const PHOTO_SIZE: number = 300;
  const ICON_SIZE: number = 23;
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/pngs/footer logo.png"
          alt="logo"
          width={PHOTO_SIZE}
          height={PHOTO_SIZE}
          loading="lazy"
          priority={false}
        />
        <p className={`text-xl text-logoblue ${GeistSans.className}`}>
          Flight to financial liberty
        </p>
      </div>
      <div>
        {/* TODO add links later */}
        <ul>
            <li>
                <Link href="#" >Overview</Link>
            </li>
            <li>
                <Link href="#" >Help</Link>
            </li>
            <li>
                <Link href="#" >Privacy</Link>
            </li>
        </ul>
      </div>
      <div>
        <button className="flex bg-logoblue rounded-full px-5 py-4 gap-3 ">
            <Image src="/assets/svgs/download.svg" alt="download svg" priority={false} loading="lazy" width={ICON_SIZE} height={ICON_SIZE} className="self-center"/>
            <p className="text-white text-lg font-semibold ">
                Install Chrome Extension
            </p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
