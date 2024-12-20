// src/Components/Searchbar.jsx

import React from 'react';
// import Search from '../assets/icon/Search.svg';

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='relative '>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search for something'
        className='placeholder:font-normal placeholder:text-[13px] bg-white_custom sm:placeholder:text-[16px] placeholder:text-[#ADB5BD] bg-[#ededed] rounded-lg px-16 py-2 sm:py-1.5 outline-none w-full'
      />
      <svg className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5  text-gray-400' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_414_3398)">
          <path d="M19.3359 18.2109L14.7344 13.6094C15.875 12.2188 16.5625 10.4375 16.5625 8.49609C16.5625 4.04297 12.9492 0.429688 8.49609 0.429688C4.03906 0.429688 0.429688 4.04297 0.429688 8.49609C0.429688 12.9492 4.03906 16.5625 8.49609 16.5625C10.4375 16.5625 12.2148 15.8789 13.6055 14.7383L18.207 19.3359C18.5195 19.6484 19.0234 19.6484 19.3359 19.3359C19.6484 19.0273 19.6484 18.5195 19.3359 18.2109ZM8.49609 14.957C4.92969 14.957 2.03125 12.0586 2.03125 8.49609C2.03125 4.93359 4.92969 2.03125 8.49609 2.03125C12.0586 2.03125 14.9609 4.93359 14.9609 8.49609C14.9609 12.0586 12.0586 14.957 8.49609 14.957Z" fill="#063E50" />
        </g>
        <defs>
          <clipPath id="clip0_414_3398">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

    </div>
  );
};

export default Searchbar;