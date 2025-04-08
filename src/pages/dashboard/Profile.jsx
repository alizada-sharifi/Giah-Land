import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import useStore from "../../store";
import { DashboardLayout } from "../../layouts";

function Profile() {
  const { name, family, mobileNo, email, address, phoneNo, saveInfo } =
    useStore();

  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const data = readFromLocalstorage("state");
    if (
      data?.name &&
      data?.family &&
      data?.email &&
      data?.mobileNo &&
      data?.phoneNo &&
      data?.address
    ) {
      saveInfo(data);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (name && email && family && mobileNo && address && phoneNo) {
      saveToLocalstorage({ name, family, email, mobileNo, phoneNo, address });
    }
  }, [name, email, family, mobileNo, phoneNo, address]);

  const saveToLocalstorage = (data) => {
    localStorage.setItem("state", JSON.stringify(data));
  };

  const readFromLocalstorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    saveInfo({
      name,
      family,
      mobileNo,
      email,
      address,
      phoneNo,
      [fieldName]: value,
    });

    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "نام الزامی است.";
    if (!family) newErrors.family = "نام خانوادگی الزامی است.";
    if (!mobileNo || !/^\d{10}$/.test(mobileNo))
      newErrors.mobileNo = "شماره موبایل باید 10 رقم باشد.";
    if (!phoneNo || !/^\d+$/.test(phoneNo))
      newErrors.phoneNo = "تلفن ثابت باید فقط شامل عدد باشد.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "ایمیل معتبر وارد کنید.";
    if (!address) newErrors.address = "آدرس الزامی است.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    saveToLocalstorage({
      name,
      family,
      mobileNo,
      email,
      address,
      phoneNo,
    });

    toast.success("اطلاعات با موفقیت ذخیره شد!");
  };

  if (!isLoaded) return <div className="p-4">در حال بارگذاری اطلاعات...</div>;

  const fields = [
    { name: "name", placeholder: "نام", value: name },
    { name: "family", placeholder: "نام خانوادگی", value: family },
    { name: "mobileNo", placeholder: "شماره موبایل", value: mobileNo },
    { name: "email", placeholder: "ایمیل", value: email },
    { name: "address", placeholder: "آدرس", value: address },
    { name: "phoneNo", placeholder: "تلفن ثابت", value: phoneNo },
  ];

  return (
    <DashboardLayout>
      <div className="grow">
        <h3 className="border-r-[3px] pr-2 border-primary font-medium text-base text-neutral-1300">
          مشخصات حساب کاربری
        </h3>

        <div className="p-4 lg:border border-neutral-300 rounded-2xl mt-10">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={handleSubmit}
          >
            {fields.map((field) => (
              <div key={field.name}>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={handleChange}
                  className={`block w-full py-2 border rounded-lg pl-3 pr-9 outline-none focus:border-primary ${
                    errors[field.name] ? "border-red-500" : "border-neutral-600"
                  }`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="mr-auto">
              <Button className="w-auto" type="submit">
                ذخیره اطلاعات
              </Button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </DashboardLayout>
  );
}

export default Profile;
