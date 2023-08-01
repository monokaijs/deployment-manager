import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import {ApiError} from "@/common/errors/api.error";
import httpStatus from "http-status";
import {ZodObject, ZodAny, ZodEffects} from "zod";

export interface RequestValidator {
  method: string,
  validator: ZodObject<any> | ZodAny | ZodEffects<any>
}

export const withRequestBodyValidation = (fn: NextApiHandler, ...requestValidators: RequestValidator[]) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const validators = requestValidators.filter(v => v.method.toLowerCase() === req.method?.toLowerCase());

    for (const {method, validator} of validators) {
      if (req.method === method) {
        const result = validator.safeParse(req.body);
        if (!result.success) {
          if (process.env.NODE_ENV === "development") {
            console.log(JSON.stringify(result.error.errors));
          }

          throw new ApiError("BAD_REQUEST", httpStatus.BAD_REQUEST);
        }
      }
    }
    return await fn(req, res);
  };
};
