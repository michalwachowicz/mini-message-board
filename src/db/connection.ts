import dotenv from "dotenv";
dotenv.config();

export function getConnection() {
  const connectionString =
    process.env.DB_CONNECTION_STRING ||
    "postgresql://username:password@localhost:5432/messages";

  return { connectionString };
}
