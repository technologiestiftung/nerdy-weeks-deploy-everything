import fetch from "node-fetch";
import { NowRequest, NowResponse } from "@vercel/node";
// see https://vercel.com/docs/serverless-functions/introduction
export default async function (
  _request: NowRequest,
  res: NowResponse
): Promise<void> {
  try {
    const responseJoke = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "text/plain" },
    });
    if (!responseJoke.ok) {
      throw new Error("Could not fetch data");
    }
    const text = await responseJoke.text();
    res.status(200).json({
      data: text,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
