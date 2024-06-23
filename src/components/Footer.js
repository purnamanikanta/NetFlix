import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='mt-1 mb-1'>
      

<footer className="bg-white  shadow  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-white text:sm text-gray-500 sm:text-center ">© 2024 <Link href="https://flowbite.com/" className="text-white hover:underline">CopyRight™ . All Rights Reserved.</Link>
    </span>
    <ul className="text-white flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" className="text-white me-4 md:me-6">Linked</Link>
        </li>
        <li>
            <Link href="#" className="text-white me-4 md:me-6">Instagram</Link>
        </li>
        <li>
            <Link href="#" className="text-white me-4 md:me-6">Licensing</Link>
        </li>
        
    </ul>
    </div>
</footer>

    </div>
  )
}


