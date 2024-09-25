import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().nonempty("Пожалуйста, введите никнейм."),
    phone_number: z
      .string()
      .regex(
        /^\d{9}$/,
        "Пожалуйста, введите корректный номер телефона из 9 цифр."
      ),
    first_name: z.string().nonempty("Пожалуйста, укажите ваше имя."),
    last_name: z.string().nonempty("Пожалуйста, укажите вашу фамилию."),
    password: z.string().min(8, "Пароль должен содержать не менее 8 символов."),
  })
  .transform((data) => ({
    ...data,
    phone_number: `+998${data.phone_number}`, // Automatically append +998 to the user's phone input
  }));

export const defaultSignUp = {
  username: "",
  phone_number: "",
  first_name: "",
  last_name: "",
  password: "",
};
