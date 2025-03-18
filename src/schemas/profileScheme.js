import { z } from "zod";

const profileSchema = z.object({
  name: z
    .string()
    .nonempty("نام الزامی می باشد")
    .min(3, "نام حداقل باید سه حرف باشد"),
  familyName: z.string().nonempty("نام خانوادگی الزامی می باشد"),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "شماره تماس نامعتبر است"),
  email: z.string().nonempty("ایمیل الزامی است").email("ایمیل معتبر نیست"),
});

export default profileSchema;
