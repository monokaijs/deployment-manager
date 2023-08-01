import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "@/common/errors/api.error";
import { ZodError } from "zod";
import httpStatus from "http-status";

export default function withApiErrorHandler(fn: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse<ResponseBody>) => {
    try {
      return await fn(req, res);
    } catch (e: any) {

      process.env.NODE_ENV === "development" && console.log("- error: ", e);
      let status: number;
      if (e instanceof ApiError) {
        status = e.code;

        res.status(status).json({
          status: status,
          success: false,
          message: e.message
        });
      } else if (e instanceof ZodError) {
        const err = e as any;

        status = httpStatus.BAD_REQUEST;

        res.status(status).json({
          status: status,
          success: false,
          message: err.errors[0].message
        });
      } else {
        status = httpStatus.INTERNAL_SERVER_ERROR;

        res.status(status).json({
          status: status,
          success: false,
          message: "UNKNOWN_ERROR"
        });
      }
    }
  };
}

