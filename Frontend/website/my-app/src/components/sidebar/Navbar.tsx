import React from 'react'
import {navBarMetaData} from "@/constraints/constraints"
import NavLinks from './NavLinks'
// TODO add link hrefs
// 
const Navbar = () => {
  return (
    <div className='bg-white w-60 h-[85vh] rounded-xl shadow-xl'>
      <div className='flex justify-center mt-10 '>
      <div className='flex flex-col justify-center gap-2'>
       {
          navBarMetaData.map((data,i)=><NavLinks key={i} name={data.name} src={data.src} alt={data.alt} href={data.href}/>)
        }
       </div>
      </div>
    </div>
  )
}

export default Navbar