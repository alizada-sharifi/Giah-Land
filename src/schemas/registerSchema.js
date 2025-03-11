import {z} from 'zod';

const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty('نام و نام خانوادگی الزامی هست')
      .min(3, 'نام و نام خانوادگی باید حداقل سه حرف باشد'),
    email: z.string().nonempty('ایمیل الزامی هست').email('ایمیل معتبر نیست'),
    password: z
      .string()
      .nonempty('پسورد الزامی هست')
      .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'رمز عبور و تکرار آن باید یکسان باشند',
    path: ['passwordConfirmation'],
  });

export default registerSchema;
