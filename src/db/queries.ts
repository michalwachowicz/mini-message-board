import pool from "./pool";

export type Message = {
  text: string;
  user: string;
  addedDate: string;
};

export async function initDatabase() {
  await pool.query(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    text TEXT,
    date TIMESTAMP
  )`);
}

export async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function addMessage(username: string, text: string) {
  await pool.query(
    "INSERT INTO messages (username, text, date) VALUES ($1, $2, NOW())",
    [username, text]
  );
}
