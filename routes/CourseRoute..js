import express from "express";
import { createCourse, getCourses } from "../controllers/CoursesContorller.js";

const courseRouter = express.Router();

courseRouter.get("/courses", getCourses);
courseRouter.post("/create", createCourse);

export default courseRouter;
