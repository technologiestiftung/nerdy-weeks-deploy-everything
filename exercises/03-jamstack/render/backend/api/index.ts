import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";
import fetch from "node-fetch";

const app = new App();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD"],
    optionsSuccessStatus: 204,
  })
);
app.get("/", async (_, res) => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "text/plain" },
    });
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    const text = await response.text();
    res.json({ data: text });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
