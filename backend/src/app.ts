import * as line from "@line/bot-sdk";
import express from "express";
import LineMessageEvent from "./model/line_message_event";
// envの読み込み
import * as dotenv from "dotenv";
dotenv.config();

// create LINE SDK config from env variables
const env = {
  channelSecret: process.env.CHANNEL_SECRET || "",
};

const app = express();

// create LINE SDK client
// const client = new line.Client(config);

// register a webhook handler with middleware
app.post("/callback", line.middleware(env), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.json({}))
    .catch((err: Error) => {
      res.status(500).end();
    });
});

app.get("/", function (req, res) {
  res.send("Hello world\n");
});

// event handler
const handleEvent = async (event: LineMessageEvent) => {
  console.log(event);
  // TODO 将来的には不要
  if (event.type !== "message" || event.message.type !== "text") {
    return null;
  }
};

// TODO store message

// listen on port
const port: number = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
