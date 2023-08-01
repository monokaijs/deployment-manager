'use server'
import {setSessionData} from "@/hooks/getSessionAccount";

export const processLogin = async (values: any) => {
  await setSessionData({
    isLoggedIn: true,
  });
}
