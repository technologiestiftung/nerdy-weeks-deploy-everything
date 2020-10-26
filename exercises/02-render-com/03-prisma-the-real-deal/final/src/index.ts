import { App, NextFunction, Request, Response } from "@tinyhttp/app";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import { cors } from "@tinyhttp/cors";
const prisma = new PrismaClient();
const server = new App();

async function catCheckMiddleware(
  req: Request,
  res: Response,
  next?: NextFunction
) {
  if (!req.params || isNaN(parseInt(req.params.catId))) {
    res.status(400).json({ error: "Missing catId parameter" });
    return;
  }
  const cat = await prisma.cat.findOne({
    where: { id: parseInt(req.params.catId) },
  });
  if (cat === null) {
    res.status(404).json({ error: "Cannot find cat" });
    return;
  }
  if (res.locals) {
    res.locals.cat = cat;
  }
  if (next) next();
}

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.json({
    message: "alive",
    url: req.url,
    params: req.params,
    query: req.query,
  });
});

server.get("/healthcheck", (req, res) => {
  res.json({
    message: "alive",
    url: req.url,
    params: req.params,
    query: req.query,
  });
});

server.get("/cats", async (req, res) => {
  const cats = await prisma.cat.findMany();
  res.json({ data: { cats } });
});

server.get("/cats/:catId", catCheckMiddleware, async (req, res) => {
  // if (!req.params || isNaN(parseInt(req.params.catId))) {
  //   res.status(400).json({ error: "Missing catId parameter" });
  //   return;
  // }
  // const cat = await prisma.cat.findOne({
  //   where: { id: parseInt(req.params.catId) },
  // });
  // if (cat === null) {
  //   res.status(404).json({ error: "Cannot find cat" });
  //   return;
  // }

  res.json({
    data: { cat: res.locals?.cat },
  });
});

server.get("/cats/:catId/moods", catCheckMiddleware, async (req, res) => {
  // if (!req.params || isNaN(parseInt(req.params.catId))) {
  //   res.status(400).json({ error: "Missing catId parameter" });
  //   return;
  // }
  // const moods = await prisma.cat.findOne({
  //   where: { id: parseInt(req.params.catId) },
  // }).moods();
  // if (moods === null) {
  //   res.status(404).json({ error: "Cannot find cat" });
  //   return;
  // }

  const moods = await prisma.cat
    .findOne({ where: { id: res.locals?.cat.id } })
    .moods();
  res.json({ data: { moods } });
});

server.get(
  "/cats/:catId/moods/:moodId",
  catCheckMiddleware,
  async (req, res) => {
    if (!req.params || isNaN(parseInt(req.params.moodId))) {
      res.status(400).json({ error: "Missing moodId parameter" });
      return;
    }

    // const catId = parseInt(req.params.catId);
    // const cat: Cat | null = await prisma.cat.findOne({
    //   where: { id: catId },
    // });
    // if (cat === null) {
    //   res.status(404).json({ error: "Cannot find cat" });
    //   return;
    // }
    const moodId = parseInt(req.params.moodId);
    const moods = await prisma.cat
      .findOne({ where: { id: res.locals?.cat.id } })
      .moods({ where: { id: moodId } });
    res.json({ data: { moods } });
  }
);

server.post("/cats", async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).json({ error: "Missing body" });
    return;
  }
  const { catchPhrase, name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Cat name is not defined" });
    return;
  }
  const cat = await prisma.cat.create({ data: { name, catchPhrase } });
  res.status(201).json({ data: { cat } });
});

server.post("/cats/:catId/moods", catCheckMiddleware, async (req, res) => {
  // if (!req.params || isNaN(parseInt(req.params.catId))) {
  //   res.status(400).json({ error: "Missing catId parameter" });
  //   return;
  // }
  // const catId = parseInt(req.params.catId);
  // const cat: Cat | null = await prisma.cat.findOne({
  //   where: { id: catId },
  // });
  // if (cat === null) {
  //   res.status(404).json({ error: "Cannot find cat" });
  //   return;
  // }
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Mood name is not defined" });
    return;
  }
  const mood = await prisma.mood.create({
    data: { name, Cat: { connect: { id: res.locals?.cat.id } } },
  });
  res.status(201).json({ data: { mood } });
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
