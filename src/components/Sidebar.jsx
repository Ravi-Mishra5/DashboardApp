import React from 'react';
import { FaHome, FaUser, FaCog, FaChartBar, FaFileAlt, FaEnvelope, FaBell, FaClipboardList, FaUserFriends } from 'react-icons/fa';

function Sidebar({ isOpen }) {
  return (
    <div className={`w-64 bg-gray-800 fixed h-full px-4 py-2 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      {/* Text-based logo at the top */}
      <div className='my-2 mb-4'>
        <h1 className='text-2xl text-white font-bold text-center'>Logo</h1>
      </div>
      
      {/* Upper section with 6 links */}
      <ul className='mt-3 text-white font-bold'>
        {/* List items */}
        {[
          { icon: <FaHome />, label: 'Home' },
          { icon: <FaUser />, label: 'Profile' },
          { icon: <FaCog />, label: 'Settings' },
          { icon: <FaChartBar />, label: 'Analytics' },
          { icon: <FaFileAlt />, label: 'Reports' },
          { icon: <FaEnvelope />, label: 'Messages' },
        ].map((item, index) => (
          <li key={index} className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <a href="#" className='flex items-center px-3'>
              <span className='inline-block w-6 h-6 mr-2'>{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Lower section */}
      <div className='mt-10'>
        <ul className='mt-3 text-white font-bold'>
          {[
            { icon: <FaBell />, label: 'Notifications' },
            { icon: <FaClipboardList />, label: 'Tasks' },
            { icon: <FaUserFriends />, label: 'Teams' },
          ].map((item, index) => (
            <li key={index} className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="#" className='flex items-center px-3'>
                <span className='inline-block w-6 h-6 mr-2'>{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
