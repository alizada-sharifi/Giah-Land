import {z} from 'zod';

const loginSchema = z.object({
  email: z.string().nonempty('ایمیل الزامی هست').email('ایمیل معتبر نیست'),
  password: z
    .string()
    .nonempty('پسورد الزامی هست')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
});

export default loginSchema;
