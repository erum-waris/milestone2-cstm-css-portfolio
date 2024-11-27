// src/app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-box">
      <div className="navbar-heading-div">
        <h1 className="logo">EW</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="ul">
        <li className="li-1"><Link  className='links' href="/">Home</Link></li>
        <li className="li-2"><Link className='links' href="/about">About</Link></li>
        <li className="li-3"><Link className='links' href="/projects">Projects</Link></li>
        <li className="li-4"><Link className='links' href="/skills">Skills</Link></li>
        <li className="li-5"><Link className='links' href="/contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="hamburger">
        <button className="btn" onClick={toggleMenu} >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="ham-list">
          <li className="li-1"><Link className='links' href="/">Home</Link></li>
          <li className="li-2"><Link className='links' href="/about">About</Link></li>
          <li className="li-3"><Link className='links' href="/projects">Projects</Link></li>
          <li className="li-4"><Link className='links' href="/skills">Skills</Link></li>
          <li className="li-5"><Link className='links' href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
