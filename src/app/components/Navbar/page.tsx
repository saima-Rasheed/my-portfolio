import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
         <nav className='bg-black text-orange-300 h-12 py-2 px-3 flex justify-between items-center'>
         <div>
          <ul className='flex space-x-5'>
        <li><Link href="/" className='hover:text-red-600'>Home</Link></li>
        <li><Link href="/about"  className='hover:text-red-600'>About</Link></li>
        <li><Link href="/projects" className='hover:text-red-600'>Projects</Link></li>
        <li><Link href="/contact" className='hover:text-red-600'>Contact</Link></li>

        </ul>
        </div>  
      </nav>

    </div>
  ) 
}

export default Navbar
