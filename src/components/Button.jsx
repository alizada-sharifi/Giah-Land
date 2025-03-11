import { Link } from "react-router";
import { cn } from "../helpers/common";

function Button(props) {
  if (props.href) {
    const { href, ...rest } = props;
    return (
      <Link
        to={href}
        {...rest}
        className={cn(
          "inline-block w-full px-4 py-2 text-lg font-medium text-white rounded-md bg-primary hover:bg-primary-1000 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed",
          props.className
        )}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type="submit"
      {...props}
      className={cn(
        "inline-block w-full px-4 py-2 text-lg font-medium text-white rounded-md bg-primary hover:bg-primary-1000 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
