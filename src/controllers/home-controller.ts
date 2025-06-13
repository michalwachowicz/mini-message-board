import express from "express";
import { Messages } from "../models/messages";

export function getHomePage(_: express.Request, res: express.Response): void {
  const messages = Messages.getInstance().getMessages();

  res.render("index", {
    title: "Home",
    partialName: "home",
    messages,
  });
}
