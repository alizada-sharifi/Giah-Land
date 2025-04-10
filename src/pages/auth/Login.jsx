import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/form/Input";
import Button from "../../components/Button";
import UseForm, { FormProvider } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas";
import { Email, Key, User } from "../../components/icons";
import useAuthStore from "../../store/authStore";
import ROUTES from "../../router/routePath";
import ShowToast from "../../helpers/showToast";

function Login() {
  const { handleSubmit, ...methods } = UseForm(loginSchema);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  function onSubmit(data) {
    login(data.name);
    navigate(ROUTES.HOME);
    ShowToast("خوش آمدید", "success");
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
              <Input name="name" placeholder="نام" icon={User} />
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
      </div>
    </AuthLayout>
  );
}

export default Login;
