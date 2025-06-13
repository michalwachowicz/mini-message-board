import express from "express";
import path from "path";
import dotenv from "dotenv";
import homeRouter from "./routes/home-router";
import newRouter from "./routes/new-router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRouter);
app.use("/new", newRouter);

app.get("/{*splat}", (_, res) => {
  res.render("index", { title: "Not Found", partialName: "not-found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
