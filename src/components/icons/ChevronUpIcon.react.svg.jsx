import React from "react";

export const ChevronUpIcon = React.forwardRef((props, ref) => (
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
      d="M6 15l6-6 6 6"
    ></path>
  </svg>
));
