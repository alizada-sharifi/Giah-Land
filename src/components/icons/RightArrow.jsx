import { cn } from "../../helpers/common";

function RightArrow({ className, ...props }) {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-primary", className)}
      {...props}
    >
      <path d="M7.70498 1.91L6.29498 0.5L0.294983 6.5L6.29498 12.5L7.70498 11.09L3.12498 6.5L7.70498 1.91Z" />
    </svg>
  );
}

export default RightArrow;
