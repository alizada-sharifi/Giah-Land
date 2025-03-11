import { cn } from "../../helpers/common";

function MobileAuth({ className, ...props }) {
  return (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-neutral-900", className)}
      {...props}
    >
      <path d="M13.9104 0.333313H5.57702C4.66035 0.333313 3.91035 1.08331 3.91035 1.99998V4.49998H5.57702V2.83331H13.9104V16.1666H5.57702V14.5H3.91035V17C3.91035 17.9166 4.66035 18.6666 5.57702 18.6666H13.9104C14.827 18.6666 15.577 17.9166 15.577 17V1.99998C15.577 1.08331 14.827 0.333313 13.9104 0.333313ZM3.91869 10.725L1.79368 8.59998L0.735352 9.65831L3.91035 12.8333L9.90202 6.84165L8.84369 5.78331L3.91869 10.725Z" />
    </svg>
  );
}

export default MobileAuth;
