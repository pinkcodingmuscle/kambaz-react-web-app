import { createSlice } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: { [key: string]: boolean };
}

const initialState: EnrollmentState = {
  enrollments: {}, // Track enrollments as { courseId: true }
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }: { payload: string }) => {
      state.enrollments[payload] = true;
    },
    unenrollCourse: (state, { payload }: { payload: string }) => {
      delete state.enrollments[payload];
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
