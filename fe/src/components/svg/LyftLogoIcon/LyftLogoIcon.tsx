import React from "react";
import Image from 'next/image';
import Logo from './Lyft.svg';

export default function BLyftLogoIcon() {
  return (
    <Image src={Logo} alt="Lyft Icon" width={50} height={50} />
  );
}
