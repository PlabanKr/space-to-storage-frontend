import React from 'react';
import Link from 'next/link';
import NavbarComponent from '@/app/_components/Navbar2/navbar2';

const PlusButton = () => {
  return (
    <Link href="/login">
      <button className="fixed bottom-4 left-4 z-10 bg-blue-500 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-8-8h16" />
        </svg>
      </button>
    </Link>
  );
};

export default function Home() {
  return (
    <>
    <NavbarComponent/>
      <PlusButton />
    </>
  );
}
