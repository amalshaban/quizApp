import { useNavigate } from "react-router-dom";
import x from "../auth-img.svg";
import "../auth.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = (setterFunction: any) => {
    setterFunction((prevState: any) => !prevState);
  };

  const [isSignInClicked, setIsSignInClicked] = useState(true);
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const toggleClick = () => {
    setIsSignInClicked((prevState: any) => !prevState);
    setIsSignUpClicked((prevState: any) => !prevState);
  };
  const navigateToRegister = useNavigate();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3005/api/auth/login",
        data
      );
      localStorage.setItem("token", response.data.data.accessToken);
      toast.success(
        response?.data?.message || "congratulations, login success !"
      );
      navigate("/instructor");
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("delete failed");
    }
  };

  

  return (
    <section className="bg-auth">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-10  lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={x}
            className="top-10 right-10 absolute h-4/5 rounded-md"
          />
        </aside>

        <main className="flex items-center rounded-xl lg:order-first justify-right sm:px-12
         lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-4l">
            <a className="block text-blue-600" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6 border-2 border-white-500 rounded-full inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6 border-2 border-white-500 rounded-full inline-block mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span className="text-white">IQ-QUIZE</span>
            </a>
            <h3 className="auth-title font-bold  sm:text-3xl md:text-4xl">
              Continue your learning journey with QuizWiz!
            </h3>

            <div
              onMouseDown={(e) => e.preventDefault()}
              onMouseUp={(e) => e.preventDefault()}
              onClick={toggleClick}
              className={
                isSignInClicked
                  ? "sign-container active-sign-container"
                  : "sign-container"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#C5D86D"
                className="size-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="text-white">Sign In</p>
            </div>
            <div id="signUp"
              onMouseDown={(e) => e.preventDefault()}
              onMouseUp={(e) => e.preventDefault()}
              onClick={()=>{
                toggleClick();
                navigateToRegister("/register")
                }}
              className={
                isSignUpClicked
                  ? "sign-container active-sign-container mx-2"
                  : "sign-container mx-2"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#C5D86D"
                className="size-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              <p  className="text-white">Sign UP</p>
            </div>

            <form
              action="#"
              onSubmit={handleSubmit(onSubmit)}
              className="grid w-full grid-cols-6 gap-6 pt-3"
            >
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-lg text-white">
                  Registered email addre
                
                </label>

                <input
                  type="email"
                  id="Email"
                  placeholder="Type your email"
                  className="px-10 py-2 mt-1 me-5 w-full border-2  border-solid border-white-500 rounded-md bg-transparent text-white text-sm  shadow-sm"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <span className="absolute -mt-8  mx-2 start-grid font-bold ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="size-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </span>
              </div>
              {errors?.email && (
                <span className="validation-message">
                  {String(errors?.email.message)}
                </span>
              )}

              <div className="col-span-6 relative">
                <label htmlFor="Password" className="block text-lg text-white">
                  Password
                </label>

                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="Password"
                  placeholder="Password"
                  className="px-10 py-2 mt-1 me-5 w-full border-2  border-solid border-white-500 rounded-md bg-transparent text-white text-sm  shadow-sm"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <span className="absolute -my-8 mx-2 start-grid font-bold ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fill-rule="evenodd" 
                      d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  type="button"
                  onClick={() => toggleVisibility(setIsPasswordVisible)}
                  className="input-group-text bg-transparent border-0"
                >
                  <span className=" absolute inset-y-1 end-0 grid w-10 place-content-center text-gray-500">
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
              {errors.password && (
                <span className="validation-message">
                  {String(errors.password.message)}
                </span>
              )}

              <div className="col-span-6 sm:flex sm:items-center sm:gap-6">
                <button className="inline-block shrink-0 rounded-md border  bg-white px-12 py-3 text-sm font-medium text-black focus:outline-none focus:ring">
                  Sign In
                  <span className=" w-15 place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 bg-black text-white rounded-full inline p-1 mx-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                </button>

                <p className="mt-4 text-md text-white sm:mt-0">
                  Forget Password?
                  <a href="/forgetpassword" className="click-link underline">
                    Click here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
