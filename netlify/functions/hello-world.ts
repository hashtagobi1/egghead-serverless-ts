import { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  console.log("hi");
  return {
    statusCode: 200,
    body: "Fuck you!",
  };
};
