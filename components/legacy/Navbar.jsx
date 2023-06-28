import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#" className="text-white text-lg font-semibold">
            <Image
            src='/assets/images/logo.svg'
            alt='logo'
            width={30}
            height={30}
            className='object-contain'
            />
        </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 font-montserrat">
              <Link href="#" className='link'>Home</Link>
              <Link href="#" className='link'>About</Link>
              <Link href="#" className='link'>Services</Link>
              <Link href="#" className='link'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;