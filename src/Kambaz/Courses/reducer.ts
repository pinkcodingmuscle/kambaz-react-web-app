import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database"; // Load courses from Database
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses, // ✅ Ensures courses are loaded initially
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // ✅ Add a new course
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        image: course.image || "/images/default.jpg",
        description: course.description,
      };
      state.courses = [...state.courses, newCourse] as any;
    },

    // ✅ Delete a course
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: any) => c._id !== courseId);
    },

    // ✅ Update a course
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },

    // ✅ Mark course as being edited (for UI purposes)
    editCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === courseId ? { ...c, editing: true } : c
      ) as any;
    },
  },
});

// ✅ Export actions
export const { addCourse, deleteCourse, updateCourse, editCourse } = coursesSlice.actions;

// ✅ Export reducer
export default coursesSlice.reducer;
