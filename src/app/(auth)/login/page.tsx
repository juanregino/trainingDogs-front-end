import FormLogin from "@/components/auth/login/FormLogin";
import { Form } from "react-hook-form";


export default function LoginPage() {
  return (<div className='flex flex-col items-center justify-center min-h-dvh'>
     <h1 className='text-white text-center text-5xl'>Login</h1>
    <FormLogin />
  </div>);
}
