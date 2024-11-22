import React from "react";
import { MoneyStatus } from "@/lib/interfaces";
import Image from "next/image";

const MoneyStatusBlock: React.FC<MoneyStatus> = ({
  alt,
  ballance,
  icon,
  name,
}) => {
  const sizeOfIcon:number = 60
  return (
    <div className="flex gap-1 bg-white rounded-2xl py-3 px-5">
      <Image src={icon} alt={alt} width={sizeOfIcon} height={sizeOfIcon}/>
      <div className="flex flex-col p-2 text-2xl">
        <p>{name}</p>
        <p>{ballance}</p>
      </div>
    </div>
  );
};

export default MoneyStatusBlock;
