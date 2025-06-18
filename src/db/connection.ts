import dotenv from "dotenv";
dotenv.config();

export function getConnection() {
  const url = process.env.PGHOST || "localhost";
  const username = process.env.PGUSER || "user";
  const password = process.env.PGPASSWORD ? `:${process.env.PGPASSWORD}` : "";
  const port = process.env.PGPORT || 5432;
  const database = process.env.PGDATABASE || "messages";

  return {
    connectionString: `postgresql://${username}${password}@${url}:${port}/${database}`,
  };
}
