import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Ninja List</h1>
        <Image src='/vercel.svg' width={128} height={77} />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/todos'>Todos Lisiting</Link>
    </nav>
  );
};

export default Navbar;
