"use client";

import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { SafeUser } from "@/types";

interface RegisterFormProps{
  currentUser: SafeUser | null;
}


const RegisterForm: React.FC<RegisterFormProps> = ({currentUser}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
    defaultValues: {
    name: "",
    email: "",
    password: ""
  }
});

const router = useRouter();

useEffect(()=>{
  if(currentUser){
    router.push("/");
    router.refresh();
  }
},[currentUser, router])

 const onSubmit:SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true);
  axios.post('/api/register', data).then(()=>{
    toast.success('Account created');

    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((callback)=> {
      if(callback?.ok){
        router.push("/");
        router.refresh();
        toast.success("logged In");       
      }
        if(callback?.error){
          toast.error(callback.error)
        }
    });

  })
  .catch(()=> toast.error("Something went wrong"))
  .finally(()=>{
    setIsLoading(false);
  });
 };

 if(currentUser){
  return <p className="text-center">register Redirecting...</p>
 }

  return (
    <>
     <Heading title="Sign up to be Explores member"/>
     <Button outline label="Sign Up with Google" icon={AiOutlineGoogle} onclick={() => {signIn('google')}}/>
     <hr className="bg-slate-300 w-full h-px" />
     <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
     <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
     <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password"/>
     <Button label={isLoading ? "Loading" : "Sign Up"} onclick={handleSubmit(onSubmit)}/>
     <p className="text-slate-500">Already have an account? <Link href={"/login"} className="underline">Log in</Link></p>
    </>
  )
}

export default RegisterForm


// signIn('credentials', {
//   email: data.email,
//   password: data.password,
//   redirect: false,
// }).then((callback)=> {
//   if(callback?.ok){
//     router.push("/");
//     router.refresh();
//     toast.success("logged In");       
//   }
//     if(callback?.error){
//       toast.error(callback.error)
//     }
// });