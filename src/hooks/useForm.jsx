import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider as ReactHookFormProvider,
  useForm as useFormHook,
} from "react-hook-form";

function UseForm(schema, defaultValues = {}) {
  return useFormHook({
    resolver: zodResolver(schema),
    mode: "onTouched", // بهتره برای UX
    defaultValues,
  });
}

export const FormProvider = ReactHookFormProvider;
export default UseForm;
