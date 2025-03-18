import { Link } from "react-router-dom";
import registerSchema from "../../schemas/registerSchema";
import AuthLayout from "../../layouts/AuthLayout";
import UseForm, { FormProvider } from "../../hooks/useForm";
import Input from "../../components/form/Input";
import { Button } from "../../components";
import { Email, Key, User } from "../../components/icons";

function Register() {
  const { handleSubmit, ...methods } = UseForm(registerSchema);

  function onSubmit(data) { 
    console.log("data", data);
  }

  return (
    <AuthLayout>
      <div className="md:w-1/2 md:px-24 container">
        <h1 className="text-lg text-neutral-1300 text-center md:text-right md:font-semibold md:text-xl mb-3">
          ثبت نام
        </h1>

        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6 space-y-4">
              <Input name="name" placeholder="نام و نام خانوادگی" icon={User} />
              <Input name="email" placeholder="ایمیل" icon={Email} />
              <Input
                name="password"
                placeholder="تعریف رمز عبور"
                type="password"
                icon={Key}
              />
              <Input
                name="passwordConfirmation"
                placeholder="تکرار رمز عبور"
                type="password"
                icon={Key}
              />
            </div>

            <Button type="submit">ثبت نام</Button>
          </form>
        </FormProvider>

        <p className="text-center mt-4 text-sm text-neutral-1300 md:text-base">
          حساب کاربری دارید؟
          <Link className="text-primary" to={"/login"}>
            <span> ورود </span>
          </Link>
          کنید
        </p>
      </div>
    </AuthLayout>
  );
}

export default Register;
