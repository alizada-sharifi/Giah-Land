import { useFormContext } from "react-hook-form";
import { cn } from "../../helpers/common";

function Input({
  name = "",
  placeholder = "",
  type = "text",
  className = "",
  icon: Icon,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <div className="inputBox relative">
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={cn(
            "block w-full py-2 border border-neutral-600 rounded-lg pl-3 pr-9 outline-none focus:border-primary ",
            className,
            {
              "border-error focus:border-error": errors[name],
            }
          )}
        />
        <Icon className={"absolute top-[28%] right-3 "} />
      </div>

      {errors[name] && (
        <p className="text-error text-xs">{errors[name].message}</p>
      )}
    </div>
  );
}

export default Input;
