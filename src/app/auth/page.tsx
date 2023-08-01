import React from "react";
import {getSessionAccount} from "@/hooks/getSessionAccount";
import {redirect} from "next/navigation";

export default async function AuthPage() {
  if (await getSessionAccount()) {
    redirect('/');
  }
  return <>
    Auth Page
  </>
}
