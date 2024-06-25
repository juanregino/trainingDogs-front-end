"use client";
import React from "react";
import { useForm } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
  username: string;
  fullname: string;
};
export const FormRegister = () => {
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
        <label htmlFor="username" />
        <input
          className="text-black rounded-sm px-4 py-2"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: {
              value: true,
              message: "El Username es requerido",
            },
          })}
        />

        {errors.username && <span> {errors.username.message} </span>}
        <label htmlFor="email" />
        <input
          className="text-black rounded-sm px-4 py-2"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "El Email es requerido",
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
        <label htmlFor="fullname" />
        <input
          className="text-black rounded-sm px-4 py-2"
          type="text"
          placeholder="Full Name"
          {...register("fullname", {
            required: {
              value: true,
              message: "El Nombre completo es requerido",
            },
          })}
        />

        {errors.fullname && <span>{errors.fullname.message}</span>}
        <div className="button-box">
          <button
            type="submit"
            className="text-white bg-black rounded-sm px-4 py-2"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
