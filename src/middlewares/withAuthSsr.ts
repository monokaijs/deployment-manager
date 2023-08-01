import {withSessionSsr} from "@/middlewares/withSession";
import {GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler, NextPageContext} from "next";

type SsrHandler = (ctx: GetServerSidePropsContext) => GetServerSidePropsResult<any> | Promise<GetServerSidePropsResult<any>>;

export const withAuthSsr = (fn: SsrHandler) => {
  return withSessionSsr((ctx: GetServerSidePropsContext) => {
    if (!ctx.req.session.isLoggedIn) {
      return {
        redirect: {
          permanent: false,
          destination: '/auth/login'
        }
      }
    }
    return fn(ctx);
  });
}
