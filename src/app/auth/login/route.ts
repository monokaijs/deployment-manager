import {NextResponse} from "next/server";
import {setSessionData} from "@/hooks/getSessionAccount";

export async function POST(request: Request) {
  await setSessionData({
    isLoggedIn: true
  })
  return NextResponse.json({
    status: 200,
    message: 'Successfully logged in'
  })
}
