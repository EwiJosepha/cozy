// components/Header.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownMenu from './dropdown-header';
import { Menu } from 'lucide-react';


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 bg-yellow-300 shadow-lg z-50 h-40 flex flex-col">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-xl font-bold">
          COZY RESIDENCE
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/attractions" className="text-white hover:text-gray-200 font-bold">Attractions</Link>
          <Link href="/apartments" className="text-white hover:text-gray-200 font-bold">Apartments</Link>
          <Link href="/apartments" className="text-white hover:text-gray-200 font-bold">XAF</Link>
          <div className=" text-white underline hover:rounded hover:bg-gray-200 font-bold">
            Sign Up
          </div>
          <div className="relative w-10 h-10">
            {/* <Image src="/assets/images/default-cozy.png" alt="Avatar" layout="fill" objectFit="cover" className="rounded-full" /> */}
          </div>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <Menu color='yellow' />
          </button>
        </div>
      </div>

      {isDropdownOpen && (
        <DropdownMenu toggleDropdown={toggleDropdown} isOpen={isDropdownOpen} />
      )}
    </header>
  );
};

export default Header;
