import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const SignUp = () => {
  // ============= Initial State Start here =============
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errUserName, setErrUserName] = useState("");
  // const [errEmail, setErrEmail] = useState("");
  const [errFirstName, setErrFirstName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setUserName(e.target.value);
    setErrUserName("");
  };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   setErrEmail("");
  // };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setErrFirstName("");
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setErrLastName("");
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  // const EmailValidation = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  // };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!userName) {
      setErrUserName("Вы не указали ваш никнейм!");
    }
    // if (!email) {
    //   setErrEmail("Enter your email");
    // } else {
    //   if (!EmailValidation(email)) {
    //     setErrEmail("Enter a Valid email");
    //   }
    // }
    if (!firstName) {
      setErrFirstName("Вы не указали вашего имени!");
    }
    if (!lastName) {
      setErrPhone("Вы не указали вашу фамилию!");
    }
    if (!phone) {
      setErrPhone("Вы не указали ваш номер телефона!");
    }
    if (!password) {
      setErrPassword("Создайте пароль!");
    } else {
      if (password.length < 6) {
        setErrPassword("Пароль должен составить минимум 6 значений");
      }
    }
    // ============== Getting the value ==============
    if (
      userName &&
      // email &&
      // EmailValidation(email) &&
      firstName &&
      lastName &&
      password &&
      password.length >= 6
    ) {
      setSuccessMsg(
        `Добро пожаловать, ${firstName}! Мы рады видеть вас в Najm, вашем лучшем магазине канцелярии. Исследуйте наш широкий ассортимент блокнотов, ручек и офисных принадлежностей, чтобы повысить вашу креативность и продуктивность!`
      );
      setFirstName("");
      setLastName("");
      setUserName("");
      // setEmail("");
      setPhone("");
      setPassword("");
    }
  };
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
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
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
                    onChange={handleName}
                    value={userName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. malohat"
                  />
                  {errUserName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errUserName}
                    </p>
                  )}
                </div>
                {/* Email */}
                {/* <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Work Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="malohat@workemail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div> */}
                {/* First name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Имя
                  </p>
                  <input
                    onChange={handleFirstName}
                    value={firstName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="Имя"
                    placeholder="Аня"
                  />
                  {errFirstName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errFirstName}
                    </p>
                  )}
                </div>
                {/* Last name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Фамилия
                  </p>
                  <input
                    onChange={handleLastName}
                    value={lastName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="Фамилия"
                    placeholder="Пирова"
                  />
                  {errLastName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errLastName}
                    </p>
                  )}
                </div>
                {/* Phone Number */}
                <div className="flex flex-col">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Номер телефона
                  </p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="+99899 111 11 11 "
                  />
                  {errPhone && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPhone}
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Пароль
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Создайте пароль"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignUp}
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
