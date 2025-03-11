import { cn } from "../../helpers/common";

function Email({ className, ...props }) {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-neutral-900", className)}
      {...props}
    >
      <path d="M17.4895 0.166687H2.82284C1.8145 0.166687 0.998669 0.991687 0.998669 2.00002L0.989502 13C0.989502 14.0084 1.8145 14.8334 2.82284 14.8334H17.4895C18.4978 14.8334 19.3228 14.0084 19.3228 13V2.00002C19.3228 0.991687 18.4978 0.166687 17.4895 0.166687ZM17.4895 13H2.82284V3.83335L10.1562 8.41669L17.4895 3.83335V13ZM10.1562 6.58335L2.82284 2.00002H17.4895L10.1562 6.58335Z" />
    </svg>
  );
}

export default Email;
