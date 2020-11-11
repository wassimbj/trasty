import React from 'react';

export default function Logo({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={width || '50pt'}
      height={height || '35pt'}
      viewBox="0 0 174 99"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0,99) scale(0.100000,-0.100000)"
        fill={`${color || '#2650ff'}`}
        stroke="none"
      >
        <path d="M1585 775 c-14 -13 -25 -31 -25 -40 0 -22 45 -65 67 -65 58 0 87 82 41 114 -32 22 -55 20 -83 -9z" />
        <path d="M30 670 l0 -50 55 0 55 0 0 -170 0 -170 60 0 60 0 0 170 0 170 50 0 c42 0 50 3 50 19 0 10 3 33 6 50 l7 31 -172 0 -171 0 0 -50z" />
        <path d="M1358 693 c-24 -4 -28 -9 -28 -39 0 -27 -4 -34 -20 -34 -17 0 -20 -7 -20 -45 0 -38 3 -45 20 -45 18 0 20 -7 20 -80 0 -104 17 -145 66 -166 38 -16 103 -13 134 6 24 15 -11 78 -47 82 -28 3 -28 4 -31 81 l-3 77 29 0 c25 0 30 5 36 31 11 54 8 59 -29 59 -34 0 -35 1 -35 40 0 39 -1 40 -32 39 -18 -1 -45 -4 -60 -6z" />
        <path d="M545 596 l-33 -36 -7 30 c-6 28 -9 30 -56 30 l-49 0 0 -170 0 -170 60 0 60 0 0 93 c0 107 13 137 60 137 30 0 35 11 43 90 4 41 -37 39 -78 -4z" />
        <path d="M1063 611 c-45 -21 -63 -45 -63 -85 0 -58 25 -82 123 -121 23 -8 37 -20 35 -27 -6 -19 -62 -21 -95 -5 -27 13 -29 12 -55 -18 l-28 -33 23 -15 c87 -57 225 -39 263 34 34 66 -2 124 -90 149 -53 15 -77 36 -52 46 17 6 60 2 86 -10 11 -4 21 4 34 25 18 31 18 32 0 46 -22 16 -80 33 -114 33 -14 0 -44 -9 -67 -19z" />
        <path d="M660 472 c0 -166 7 -187 64 -197 29 -6 61 3 119 33 4 2 7 -3 7 -12 0 -12 11 -16 50 -16 l50 0 0 170 0 170 -55 0 -55 0 0 -113 c0 -121 -10 -152 -46 -145 -17 3 -19 14 -22 131 l-3 127 -54 0 -55 0 0 -148z" />
        <path d="M1570 450 l0 -170 60 0 60 0 0 170 0 170 -60 0 -60 0 0 -170z" />
      </g>
    </svg>
  );
}
