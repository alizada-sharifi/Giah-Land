import { cn } from "../../helpers/common";

function Tree3({ className, ...props }) {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-primary", className)}
      {...props}
    >
      <path d="M21.6666 22L16.3333 15.3333H20.3333L15 8.66663H17.6666L11 0.666626L4.33331 8.66663H6.99998L1.66665 15.3333H5.66665L0.333313 22H9.66665V27.3333H12.3333V22H21.6666Z" />
    </svg>
  );
}

export default Tree3;
