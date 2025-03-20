import { cn } from "../../helpers/common";

function Trash({ className, ...props }) {
  return (
    <svg
      width="17"
      height="22"
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-error", className)}
      {...props}
    >
      <path d="M13.1663 7.5V19.1667H3.83301V7.5H13.1663ZM11.4163 0.5H5.58301L4.41634 1.66667H0.333008V4H16.6663V1.66667H12.583L11.4163 0.5ZM15.4997 5.16667H1.49967V19.1667C1.49967 20.45 2.54967 21.5 3.83301 21.5H13.1663C14.4497 21.5 15.4997 20.45 15.4997 19.1667V5.16667Z" />
    </svg>
  );
}

export default Trash;
