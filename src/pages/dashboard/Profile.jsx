import { DashboardLayout } from "../../layouts";
import user from "../../assets/images/bg.png";
import { Button } from "../../components";
import UseForm, { FormProvider } from "../../hooks/useForm";
import { profileSchema } from "../../schemas";
import Input from "../../components/form/Input";
import {
  Email,
  Location,
  MobileAuth,
  Phone,
  User,
} from "../../components/icons";
import { useState } from "react";

function Profile() {
  const { handleSubmit, ...methods } = UseForm(profileSchema);
  function onSubmit(data) {
    console.log("data", data);
  }
  const [isDisabled, setIsDisabled] = useState(true);

  const cancelHandler = () => {
    setIsDisabled(true);
  };
  const saveHandler = () => {
    setIsDisabled(true);
  };

  return (
    <DashboardLayout>
      <div className="grow">
        <h3 className="border-r-[3px] pr-2 border-primary font-medium text-base text-neutral-1300">
          مشخصات حساب کاربری
        </h3>
        <div className="p-4 lg:border  border-neutral-300 rounded-2xl">
          <div className="flex gap-4 md:gap-10 items-center">
            <img src={user} alt="user Image" className="size-14 rounded-full" />
            <Button className="w-auto text-xs md:text-sm px-2 md:px-6 py-3  ">
              ویرایش با تصویر جدید
            </Button>
            <Button className="w-auto text-xs md:text-sm px-2 md:px-6 py-3 bg-neutral-200 rounded-xl hover:bg-transparent border text-primary  ">
              حذف تصویر
            </Button>
          </div>

          <div className=" mt-10">
            <FormProvider {...methods}>
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <Input
                  name="name"
                  placeholder="name"
                  icon={User}
                  isDisabled={isDisabled}
                />
                <Input
                  name="familyName"
                  placeholder="family name"
                  icon={User}
                  isDisabled={isDisabled}
                />
                <Input
                  name="phoneNumber"
                  placeholder="phone"
                  icon={MobileAuth}
                  isDisabled={isDisabled}
                />
                <Input
                  name="email"
                  placeholder="ایمیل"
                  icon={Email}
                  isDisabled={isDisabled}
                />
                <Input
                  name="address"
                  placeholder="آدرس منزل"
                  icon={Location}
                  isDisabled={isDisabled}
                />
                <Input
                  name="phone"
                  placeholder="تلفن منزل"
                  icon={Phone}
                  isDisabled={isDisabled}
                />
              </form>
            </FormProvider>
            <div className="flex justify-center text-sm md:text-base font-medium mt-7">
              {isDisabled ? (
                <Button
                  className="w-auto bg-transparent text-primary border border-primary hover:bg-transparent"
                  onClick={() => setIsDisabled(false)}
                >
                  ویرایش اطلاعات شخصی
                </Button>
              ) : (
                <div className="flex items-center justify-between md:justify-center gap-x-4 w-full  ">
                  <Button
                    className="w-auto bg-transparent hover:bg-transparent text-primary border border-primary md:px-10"
                    onClick={cancelHandler}
                  >
                    انصراف
                  </Button>
                  <Button
                    className="w-auto"
                    onClick={saveHandler}
                    type="submit"
                  >
                    ذخیره اطلاعات
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
