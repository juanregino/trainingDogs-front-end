"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
};
const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={onSubmit}
      >
        <label htmlFor="email" />
        <input
          className="text-black rounded-sm px-4 py-2"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
          })}
        />

        {errors.email && <span> {errors.email.message} </span>}

        <label htmlFor="password" />
        <input
          className="text-black rounded-sm px-4 py-2"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
        />

        {errors.password && <span>{errors.password.message}</span>}
        <div className="rounded-sm px-4 py-2 ">
          <button
            type="submit"
            className="text-white bg-black rounded-sm px-4 py-2"
          >
            Login
          </button>
        </div>
        <div>
          <span>
            on&apos;t have an account ?{" "}
            <Link href="/sign-up" className="text-blue-300 underline">
              register here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
