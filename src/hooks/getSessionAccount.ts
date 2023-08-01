import {unsealData} from "iron-session";
import {sessionConfig} from "@/common/configs/auth.config";
import {cookies} from "next/headers";

export async function getSessionAccount(): Promise<Account | null> {
  const cookieName = sessionConfig.cookieName;
  const found = cookies().get(cookieName);
  if (!found) return null;
  const account = await unsealData(found.value, sessionConfig);

  return account as unknown as Account;
}
