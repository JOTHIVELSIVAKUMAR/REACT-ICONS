import * as React from "react";

export interface CustomIconProps
  extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function CustomIcon({
  size = 24,
  ...props
}: CustomIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 12L10.5 14.5L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CustomIcon;
