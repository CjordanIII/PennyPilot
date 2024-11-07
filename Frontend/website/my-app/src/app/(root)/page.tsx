import SectionOne from "@/components/sections/landing_page/SectionOne";
import SectionTwo from "@/components/sections/landing_page/SectionTwo";

const page = () => {
  return (
    <div>
      <div className="mb-5">
      <SectionOne />
      </div>
      <div className="mb-5 ml-10 w-11/12">
        <SectionTwo />
      </div>

     
    </div>
  );
};

export default page;
