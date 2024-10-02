import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultSignUp, signUpSchema } from "../../lib/validations";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/inputOTP";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";

const SignUp = () => {
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  // Submit data
  const submitData = async (data) => {
    try {
      await axios
        .post("http://38.242.226.165/users/register/", data)
        .then((res) => console.log(res))
        .then(() => {
          setSubmitSuccessful(true);
          console.log(submitSuccessful);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: defaultSignUp,
  });

  const FormSchema = z.object({
    verification_code: z.string().min(4, {
      message: "Your one-time password must be 4 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      verification_code: "",
    },
  });

  async function onSubmit(data) {
    const newData = {
      phone_number: getValues("phone_number"),
      ...data,
    };
    try {
      await axios
        .post("http://38.242.226.165/users/verify/", newData)
        .then((res) => {
          console.log(res);
          toast({
            title: "Аккаунт создан",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">
                  {JSON.stringify(newData, null, 2)}
                </code>
              </pre>
            ),
          });
        });
    } catch (err) {
      console.log(err);
      toast({
        title: "Неверный код подтверждения",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(newData, null, 2)}
            </code>
          </pre>
        ),
      });
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full">
        <div className="w-[450px] h-full bg-primeColor px-10 py-[38%]">
          <Link to="/" className="">
            <img src={logo} alt="Najm" className="w-[200px] m-auto" />
          </Link>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Войти
              </button>
            </Link>
          </div>
        ) : submitSuccessful ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="verification_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Введите смс код</FormLabel>{" "}
                    {/* Ensure consistent language */}
                    <FormControl>
                      <InputOTP maxLength={4} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Введите одноразовый пароль, отправленный на ваш телефон.{" "}
                      {/* Change to match language */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Отправить</Button>{" "}
              {/* Consistent language */}
            </form>
          </Form>
        ) : (
          <form
            onSubmit={handleSubmit(submitData)}
            className="w-full lgl:w-[500px] h-screen flex items-center justify-center"
          >
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Создайте аккаунт
              </h1>
              <div className="flex flex-col gap-3">
                {/* User name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Никнейм
                  </p>
                  <input
                    {...register("username", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                    })}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. malohat"
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      {errors.username.message}
                      <span className="font-bold italic mr-1">!</span>
                    </p>
                  )}
                </div>
                {/* First name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Имя
                  </p>
                  <input
                    {...register("first_name", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                    })}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="Имя"
                    placeholder="Аня"
                  />
                  {errors.first_name && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      {errors.first_name.message}
                      <span className="font-bold italic mr-1">!</span>
                    </p>
                  )}
                </div>
                {/* Last name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Фамилия
                  </p>
                  <input
                    {...register("last_name", {
                      required: true,
                      maxLength: 20,
                      minLength: 1,
                    })}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="Фамилия"
                    placeholder="Пирова"
                  />
                  {errors.last_name && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      {errors.last_name.message}
                      <span className="font-bold italic mr-1">!</span>
                    </p>
                  )}
                </div>
                {/* Phone Number */}
                <div className="flex flex-col">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Номер телефона
                  </p>
                  <input
                    {...register("phone_number", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="99 111 11 11 "
                  />
                  {errors.phone_number && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      {errors.phone_number.message}
                      <span className="font-bold italic mr-1">!</span>
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Пароль
                  </p>
                  <input
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Создайте пароль"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      {errors.password.message}
                      <span className="font-bold italic mr-1">!</span>
                    </p>
                  )}
                </div>
                <button
                  onClick={() =>
                    isSubmitSuccessful
                      ? toast("Вам отправлен код", {
                          description:
                            "Вам отправлен код подтверждения, введите код пароль",
                          action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                          },
                        })
                      : toast("чтото пошло не так, повторите попытку", {
                          description:
                            "Вам отправлен код подтверждения, введите код пароль",
                          action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                          },
                        })
                  }
                  type="submit"
                  className={`bg-primeColor hover:bg-black cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Создать аккаунт
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Уже есть аккаунт?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Войти
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
