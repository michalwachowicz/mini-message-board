import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, "..", "public");

app.use(express.static(PUBLIC_DIR));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/{*splat}", (_, res) => {
  res.render("index", { title: "Not Found", partialName: "not-found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
