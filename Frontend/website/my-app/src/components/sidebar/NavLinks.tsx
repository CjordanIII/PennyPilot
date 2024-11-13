import React from 'react'
import {mapConstraintTypes} from "@/lib/interfaces"
import Image from 'next/image'
import Link from 'next/link'
import { GeistSans } from "geist/font/sans";
const NavLinks:React.FC<mapConstraintTypes> = ({name,src,alt,href}) => {
    const iconSize:number = 30
  return (
    <div className='flex gap-2 hover:bg-navhoverbackground  px-4 rounded-full  transition duration-200 ease-in-out '>
        <Image alt={alt} src={src} width={iconSize} height={iconSize}/>
        <Link href={href} className={`text-customblack ${GeistSans.className}` }>{name}</Link>
    </div>
  )
}

export default NavLinks