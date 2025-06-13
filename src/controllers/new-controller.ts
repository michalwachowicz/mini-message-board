import express from "express";
import { Messages } from "../models/messages";

export function getNewMessagePage(
  _: express.Request,
  res: express.Response
): void {
  res.render("index", {
    title: "New Message",
    partialName: "new-message",
  });
}

export function createNewMessage(
  req: express.Request,
  res: express.Response
): void {
  const { text, user } = req.body;

  Messages.getInstance().addMessage(text, user);
  res.redirect("/");
}
