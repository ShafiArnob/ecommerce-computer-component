import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// console.log(env);

app.get("/", (req, res) => {
  return res.send("hello");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
