import React from "react";
import Image from 'next/image';
import Logo from './Uber.svg';

export default function BUberLogoIcon() {
  return (
    <Image src={Logo} alt="Uber Icon" width={50} height={50} />
  );
}
