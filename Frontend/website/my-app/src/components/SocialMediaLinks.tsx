import { socialMedia } from "@/constraints/constraints";
import Image from "next/image";
import Link from "next/link";

const SocialMediaLinks = () => {
  const ICON_SIZE: number = 26;
  return (
    <ul className="flex justify-evenly w-3/4">
      {socialMedia.map((data, i) => {
        return (
          
            <li key={i}>
              <Link href={data.href}>
                <Image
                  src={data.src}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  alt={data.alt}
                />
              </Link>
            </li>
          
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
