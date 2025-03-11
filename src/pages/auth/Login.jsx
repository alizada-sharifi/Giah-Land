import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/form/Input";
import Button from "../../components/Button";

// import useForm, { FormProvider } from "../../hooks/UseForm";
import UseForm, { FormProvider } from "../../hooks/useForm";

import { Link } from "react-router-dom";
import { loginSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { Email, Key } from "../../components/icons";

function Login() {
  const { handleSubmit, ...methods } = UseForm(loginSchema);
  const navigate = useNavigate();

  function onSubmit(data) {
    navigate("/");
    console.log("data", data);
  }

  return (
    <AuthLayout>
      <div className="md:w-1/2 md:px-24 container">
        <h1 className="text-lg text-neutral-1300 text-center md:text-right md:font-semibold md:text-xl mb-3">
          ورود
        </h1>

        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6 space-y-4">
              <Input name="email" placeholder="ایمیل" icon={Email} />
              <Input
                name="password"
                placeholder="رمز عبور"
                type="password"
                icon={Key}
              />
            </div>

            <Button type="submit">ورود</Button>
          </form>
        </FormProvider>

        <p className="text-center mt-4 text-sm text-neutral-1300 md:text-base">
          حساب کاربری ندارید؟
          <Link className="text-primary " to={"/signup"}>
            <span> ثبت نام </span>
          </Link>
          کنید
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
