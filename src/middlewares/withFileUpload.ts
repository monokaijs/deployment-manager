import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import mime from "mime";

export interface UploadOptions {
  maxFileSize?: number,
  extensions?: any[]
}

export interface ExtNextApiRequest extends NextApiRequest {
  files?: formidable.Files;
}

export const withFileUpload = (fn: NextApiHandler, uploadOptions?: UploadOptions) => {

  return async (req: ExtNextApiRequest, res: NextApiResponse) => {

    const { fields, files } = await parseForm(req);

    req.body = fields;
    req.files = files;

    return await fn(req, res);
  };
};

export const parseForm = async (req: NextApiRequest, options?: UploadOptions): Promise<{
  fields: formidable.Fields,
  files: formidable.Files
}> => {

  return new Promise(async (resolve, reject) => {

    const form = formidable({
      // maxFiles: 2,
      maxFileSize: options?.maxFileSize || 1024 * 1024, // 1mb
      // uploadDir,
      filename: (_name, _ext, part) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

        const extension = mime.getExtension(part.mimetype || "") || "unknown";

        return `${part.name || "unknown"}-${uniqueSuffix}.${extension}`;
      },
      filter: (part) => {
        return (
          part.name === "media" && (part.mimetype?.includes("image") || false)
        );
      }
    });

    form.parse(req, function(err, fields, files) {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};
