import {IronSessionData, sealData, unsealData} from "iron-session";
import {sessionConfig} from "@/common/configs/auth.config";
import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function getSessionAccount(): Promise<Account | null> {
  const data = await getSessionData();

  return data?.account;
}

export async function getSessionData(): Promise<IronSessionData> {
  const cookieName = sessionConfig.cookieName;
  const found = cookies().get(cookieName);
  if (!found) return {
    isLoggedIn: false
  };
  const data = await unsealData(found.value, sessionConfig);

  return data as unknown as IronSessionData;
}

export const setSessionData = async (data: IronSessionData) => {
  const response = NextResponse.next();
  return response.cookies.set(sessionConfig.cookieName, await sealData(data, sessionConfig));
}
