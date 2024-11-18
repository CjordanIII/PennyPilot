import { profileAction } from "@/actions/user.actions";
import { UserProfile } from "@/services/user.service";
import Image from "next/image";

const Profile = () => {
  // mock api
  const photoName: UserProfile = profileAction();
  // pfp meta data
  const image: string = photoName.photo;
  const name: string = photoName.name;
  // image size
  const IMAGE_SIZE: number = 60;

  return (
    <div className="bg-white shadow-md py-4 px-2 flex justify-center rounded-xl">
      <div className="flex gap-7">
        <Image
          alt="profile photo"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          src={image}
        />
        <h1 className="text-3xl font-bricolage self-center">{name}</h1>
      </div>
    </div>
  );
};

export default Profile;
