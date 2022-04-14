import { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const { name, faveColor } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      faveColor,
      message: `My name = ${name} and my fave color is ${faveColor}`,
    }),
  };
};
