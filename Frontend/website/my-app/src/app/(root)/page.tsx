import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  // TODO add routes to links
  const LOGO_SIZE: number = 900;
  return (
    <div
      className={`${GeistSans.className} bg-custom-bg h-screen bg-cover bg-center flex justify-center items-center`}
    >
      <div className="flex flex-col align-middle text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/svgs/Logo.svg"
          
            priority={false}
            loading="lazy"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            alt="Logo"
          />
          <figcaption className="text-white text-4xl font-medium mb-20">
            Flight to financial liberty
          </figcaption>
        </div>
     
        <div className="flex flex-col items-center mt-4 bg-white w-3/6 rounded-2xl py-10 self-center mb-10">
          <h6 className="text-2xl py-5">Log In</h6>
          <hr className=" w-3/5 border-[#F5F5F5] border-1" />
          <div className="flex gap-5 py-5">
            <Image
              src="/assets/icons/email.svg"
              loading="lazy"
              priority={false}
              className="w-10"
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              alt="Email"
            />
            <Link href="#" className="text-2xl">Login with email</Link>
          </div>
          {/* TODO change to color custom white */}
          <hr className=" w-3/5 border-[#F5F5F5] border-1" />
          <div className="flex gap-5 mt-2 py-5 items-center">
            <Image
              src="/assets/icons/google.svg"
              loading="lazy"
              priority={false}
              className="w-10 "
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              alt="Google logo"
            />
            <Link href="#" className="text-2xl">Login with Google</Link>
          </div>
        </div>
        <div className="text-white">
          <p className="text-2xl my-4 font-normal">Don't have an account?</p>
          <Link href="#" className="font-medium text-4xl">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
