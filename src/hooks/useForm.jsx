import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider as ReactHookFromProvider,
  useForm as useFormHook,
} from "react-hook-form";

function UseForm(schema) {
  return useFormHook({
    resolver: zodResolver(schema),
  });
}

export const FormProvider = ReactHookFromProvider;
export default UseForm;
