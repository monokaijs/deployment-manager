import React from "react";
import {getSessionAccount} from "@/hooks/getSessionAccount";
import {redirect} from "next/navigation";
import {LoginForm} from "@/app/auth/LoginForm";

export default async function AuthPage() {
  if (await getSessionAccount()) {
    redirect('/');
  }
  return <>
    <LoginForm/>
  </>
}
