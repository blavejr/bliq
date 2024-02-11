import React from "react";
import Image from 'next/image';
import Bolt from './Bolt.svg';

export default function BBoltLogo() {
  return (
    <Image src={Bolt} alt="Bolt Icon" width={50} height={50} />
  );
}
