
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import logo from '../../../public/logo.png';
import styles from './BNavbar.module.scss';

export default function BNavbar() {
    return (
      <Navbar fluid rounded className={styles.sticky}>
        <Navbar.Brand as={Link} href="/">
          <img src="http://clipart-library.com/images_k/car-transparent-background/car-transparent-background-22.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-gray-800">Bliq</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }

