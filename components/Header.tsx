'use client';
import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
      <div className="flex flex-col  md:flex-row items-center p-5 bg-gray-500/10  rounded-b-2xl">
        <div
          className=" 
            absolute
            top-0
            left-0
            w-full
            h-96
            bg-gradient-to-br
            from-pink-400
            to-[#0055D1]
            rounded-md
            filter
            blur-3xl
            opacity-50
            -z-50
            "
        />
        <Image
          src={'/logo.png'}
          alt="Logo"
          width={200}
          height={50}
          className="w-44 md:w-52 pb-10 md:pb-20  objet-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full ">
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" placeholder="Search" className="flex-1 p-2 outline-none" />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* Avatar */}

          <Avatar name="rusiru" round size="50" color="#0055D1" />
        </div>
      </div>

      <div className="flex items-center justify-center  px-5 py-2 md:py-5">
        <p className=" flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarising your tasks for day....
        </p>
      </div>
    </header>
  );
}

export default Header;
