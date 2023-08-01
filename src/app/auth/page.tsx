import React from "react";
import {getSessionAccount, getSessionData, setSessionData} from "@/hooks/getSessionAccount";
import {redirect} from "next/navigation";
import {LoginForm} from "@/app/auth/LoginForm";

export default async function AuthPage() {
  const session = await getSessionData();
  if (session.isLoggedIn) {
    redirect('/');
  }

  return <>
    <LoginForm/>
  </>
}
