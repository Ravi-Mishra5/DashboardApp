import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
  return (
    <div>
      <nav className='bg-slate-300 px-4 py-3 flex justify-between items-center'>
        {/* Left side: Hamburger menu */}
        <button className='text-white' onClick={toggleSidebar}>
          <FaBars />
        </button>

        {/* Left side: Dashboard Text */}
        <div className='flex items-center text-xl'>
          <span className='text-white font-semibold'>Dashboard</span>
        </div>

        {/* Right side: Search Icon, Customize, Export */}
        <div className='flex items-center gap-x-5'>
          {/* Search Icon only */}
          <button className='p-1 focus:outline-none text-white'>
            <FaSearch className='text-white' />
          </button>

          {/* Customize Button */}
          <button className='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition duration-300'>
            Customize
          </button>

          {/* Export Button */}
          <button className='border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition duration-300'>
            Export
          </button>
        </div>
      </nav>

      {/* Inline paragraphs aligned with gap under Dashboard */}
      <div className='flex gap-12 items-baseline mt-4 ml-4 md:ml-48'>
        <p className='font-bold border-b-2 border-gray-500 pb-1'>Market Analysis</p>
        <p className='font-bold'>Performance</p>
      </div>

      <hr className='font-bold mt-2 ml-4 md:ml-48' />
    </div>
  );
}

export default Navbar;
