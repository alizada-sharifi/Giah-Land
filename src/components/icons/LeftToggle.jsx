import { cn } from "../../helpers/common";

function LeftToggle({ className, ...props }) {
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
      <path d="M0.295 1.91L1.705 0.5L7.705 6.5L1.705 12.5L0.295 11.09L4.875 6.5L0.295 1.91Z" />
    </svg>
  );
}

export default LeftToggle;
