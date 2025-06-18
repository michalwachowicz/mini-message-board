import express from "express";
import { addMessage } from "../db/queries";

export function getNewMessagePage(
  _: express.Request,
  res: express.Response
): void {
  res.render("index", {
    title: "New Message",
    partialName: "new-message",
  });
}

export async function createNewMessage(
  req: express.Request,
  res: express.Response
) {
  const { username, text } = req.body;
  await addMessage(username, text);

  res.redirect("/");
}
