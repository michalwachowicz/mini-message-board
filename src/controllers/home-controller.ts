import express from "express";
import formatDate from "../utils/date-formatter";
import { getMessages } from "../db/queries";

export async function getHomePage(_: express.Request, res: express.Response) {
  const queriedMessages = await getMessages();
  const messages = queriedMessages.map((msg) => ({
    ...msg,
    date: formatDate(new Date(msg.date)),
  }));

  res.render("index", {
    title: "Home",
    partialName: "home",
    messages,
  });
}
