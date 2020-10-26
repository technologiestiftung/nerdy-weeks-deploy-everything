import "@babel/polyfill/noConflict";
import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";
import fetch from "node-fetch";

interface Response {
  statusCode: number;
  body: string;
}
export async function handler(
  context: Context,
  callback: Callback
): Promise<Response> {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "text/plain" },
    });
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    const text = await response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: text,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
}
