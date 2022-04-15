import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import useUser from "../lib/useUser";
import fetchJson, { FetchError } from "../lib/fetchJson";

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: "/dashboard",
    redirectIfFound: true,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    const body = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
      setIsLoading(false);
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
      setIsLoading(false);
    }
  }

  function handleResetPassword(event) {
    event.preventDefault();
    setErrorMsg("Contact support to reset your password");
  }

  return (
    <div className=" min-h-screen relative w-full bg-blue-50">
      <div className="flex flex-col gap-1 items-center w-full h-full justify-center">
        <div className=" px-5 p-3 rounded-md bg-blue-200 mt-32">
          <h1 className="text-gray-800">Dashboard Login</h1>
          <h3></h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" mt-24 border p-9 bg-white shadow-md"
        >
          {errorMsg && (
            <div
              className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
              role="alert"
            >
              {errorMsg}
            </div>
          )}
          {isLoading && (
            <div className="flex items-center">
              <svg
                role="status"
                className="place-self-center inline mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
          <input
            type="text"
            name="email"
            placeholder="email"
            className=" border px-2 py-2 mt-2 w-full rounded-sm"
            required="required"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className=" border px-2 py-2 mt-2 w-full rounded-sm"
            required="required"
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" mt-3 px-3 py-2 rounded-sm text-sm hover:bg-blue-800 bg-pr text-white"
            >
              Login
            </button>
            <button
              onClick={handleResetPassword}
              className=" mt-3 px-3 py-2 rounded-sm text-sm hover:bg-pink-800 bg-pink-600 text-white"
            >
              Forget Password
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
