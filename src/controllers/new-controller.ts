import express from "express";

export function getNewMessagePage(
  _: express.Request,
  res: express.Response
): void {
  res.render("index", {
    title: "New Message",
    partialName: "new-message",
  });
}
