import SectionOne from "@/components/sections/landing_page/SectionOne";
import SectionTwo from "@/components/sections/landing_page/SectionTwo";
import SectionThree from "@/components/sections/landing_page/SectionThree";
const page = () => {
  return (
    <div>
      <div className="mb-4">
      <SectionOne />
      </div>
      <div className="mb-4 ml-10 w-11/12">
        <SectionTwo />
      </div>
      <div>
        <SectionThree/>
      </div>
    </div>
  );
};

export default page;
