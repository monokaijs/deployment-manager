import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/middlewares/withSession";
import { ApiError } from "@/common/errors/api.error";
import httpStatus from "http-status";

export interface RequestAuthorization {
  method: string[],
}

export default function withAuth(fn: NextApiHandler, { method }: RequestAuthorization = {
  method: [],
}) {
  return withSessionRoute(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = req.session;
    if (!session || !session.isLoggedIn || !session.account) throw new ApiError("UNAUTHORIZED", httpStatus.UNAUTHORIZED);
    if (method.includes(req.method as string)) throw new ApiError("FORBIDDEN", httpStatus.FORBIDDEN);

    return await fn(req, res);
  });
}

