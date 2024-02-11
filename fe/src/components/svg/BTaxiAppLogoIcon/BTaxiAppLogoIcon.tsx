import React from "react";
import Image from 'next/image';
import Logo from './logo.png';

export default function BTaxiAppLogoIcon() {
  return (
    <Image src={Logo} alt="TaxiApp Icon" width={50} height={50} />
  );
}
