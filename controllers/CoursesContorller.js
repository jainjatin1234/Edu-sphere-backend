import Course from "../models/coursesSchema.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


export const createCourse = async (req, res) => {
  try {
    const data = req.body;

  

    await Course.insertMany(data);

    return res.status(200).json({
      message: "Successfully created",
      success: true,
    });
  } catch (error) {
    console.log("error in create course", error);
    return res.status(500).json({
      message: "error in create course",
      error,
    });
  }
};