import React from "react";

interface BHailIconProps {
    fill?: string;
    width?: string;
}

export default function BHailIcon({ fill="black", width="20px" }: BHailIconProps) {
  return (
    <svg
      fill={fill}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g>
        <circle cx="110.1" cy="23.2" r="21" />
        <path
          d="M195.2,4.9c-3.6-3.6-9.4-3.6-13,0l-29.6,29.6l-10.2,10.2c-3.1,3.1-7.1,4.6-11.1,4.6h-21.1h0H83.9
     c-14.5,0-26.2,11.7-26.2,26.2v64.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-59c0-1.4,1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6v21
     v44.5v94.3c0,7.2,5.9,13.1,13.1,13.1c7.2,0,13.1-5.9,13.1-13.1V149c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6v91.7
     c0,7.2,5.9,13.1,13.1,13.1s13.1-5.9,13.1-13.1v-94.3h0V74.2l26.6-26.6l29.6-29.6C198.7,14.3,198.7,8.5,195.2,4.9z"
        />
      </g>
    </svg>
  );
}
