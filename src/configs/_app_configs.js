export const APP_CONFIG = {
  ENVIRONMENT: {
    development: process.env.NODE_ENV === "development",
    production: process.env.NODE_ENV === "production",
  },
};
