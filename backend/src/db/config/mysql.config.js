import { createConnection } from "mysql";

const dbConfig = {
  HOST: "indeed-db.cynkmum2p3uu.us-east-2.rds.amazonaws.com",
  PORT: "3306",
  USER: "admin",
  PASSWORD: "admin1234",
  DB: "indeed",
};

// Create connection to database
const conn = createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// Connect to database
conn.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database");
});

export default conn;
