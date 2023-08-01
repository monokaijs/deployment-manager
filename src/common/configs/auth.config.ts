export const sessionConfig = {
  cookieName: "deployment-manager",
  password: process.env.SESSION_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
