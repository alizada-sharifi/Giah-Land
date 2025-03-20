import { DashboardLayout } from "../../layouts";
import { Button } from "../../components";
import { useState } from "react";
import { Upload, Trash } from "../../components/icons";

function Doctor() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {};

  return (
    <DashboardLayout>
      <div className="grow">
        <h3 className="border-r-[3px] pr-2 border-primary font-medium text-base text-neutral-1300">
          مشاوره با گیاه پزشک
        </h3>
        <div className="p-4 lg:border border-neutral-300 rounded-2xl mt-10">
          <div className="relative w-40 h-40">
            <label className="w-full h-full flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="w-8 h-8 text-gray-500" />
                  <span className="mt-2 text-sm text-gray-600">
                    آپلود تصویر گیاه
                  </span>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>
            {image && (
              <button
                className="absolute top-1 left-1  text-white rounded-full p-1"
                onClick={removeImage}
              >
                <Trash className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-left mt-5">
            <textarea
              name="message"
              className="border border-neutral-600 py-3 px-3 rounded-lg block w-full outline-none h-44 resize-none focus:ring-2 focus:ring-primary"
              placeholder="توضیح درباره مشکل گیاه :"
            />

            <Button
              className="w-full sm:w-auto mt-5 px-6"
              onClick={handleSubmit}
            >
              ارسال
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Doctor;
