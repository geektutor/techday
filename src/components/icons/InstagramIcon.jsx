import React from "react";

export const InstagramIcon = React.forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    ref={ref}
  >
    <path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z"
    ></path>
    <path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
    ></path>
  </svg>
));
