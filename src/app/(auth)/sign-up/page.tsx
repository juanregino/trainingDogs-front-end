import { FormRegister } from "@/components/auth/sign-up/FormRegister";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh gap-2">
      <h1 className="text-white text-center text-5xl">Register</h1>
      <FormRegister />
    </div>
  );
}