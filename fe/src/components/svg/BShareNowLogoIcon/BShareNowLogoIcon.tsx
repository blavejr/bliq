import React from "react";
import Image from 'next/image';
import Logo from './logo.jpeg';

export default function BShareNowLogoIcon() {
  return (
    <Image src={Logo} alt="ShareNow Icon" width={50} height={50} />
  );
}
