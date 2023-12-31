import React, { SVGProps } from "react";

export const LocationIcon = React.forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="28"
    viewBox="0 0 21 28"
    fill="none"
    {...props}
    red={ref}
  >
    <path
      d="M9.42091 27.4351C1.47492 15.9158 0 14.7335 0 10.5C0 4.70099 4.70099 0 10.5 0C16.299 0 21 4.70099 21 10.5C21 14.7335 19.5251 15.9158 11.5791 27.4351C11.0576 28.1883 9.9423 28.1883 9.42091 27.4351ZM10.5 14.875C12.9163 14.875 14.875 12.9163 14.875 10.5C14.875 8.08374 12.9163 6.125 10.5 6.125C8.08374 6.125 6.125 8.08374 6.125 10.5C6.125 12.9163 8.08374 14.875 10.5 14.875Z"
      fill="currentColor"
    />
  </svg>
));
