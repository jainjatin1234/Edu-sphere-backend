import express, { urlencoded } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cookieparser from "cookie-parser";
import cors from "cors";
import courseRouter from "./routes/CourseRoute..js";
import connection from "./utils/db.js";


const app = express();

app.use(
  cors({
      origin: "http://localhost:5173", // Allow frontend origin
      credentials: true, // Allow credentials (cookies, auth headers, etc.)
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);


dotenv.config({ path: ".env" });

app.use(express.json());
connection();

app.use(cookieparser());

app.use(express.urlencoded({ extended: true }));

app.use("/user/v2", userRouter);
app.use("/course/v2", courseRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/cookie", (req, res) => {
  res.send(req.cookies);
  console.log(req.cookies);
});

app.listen(process.env.PORT, () => { 
  console.log(`server is running`);
})
export default app;
