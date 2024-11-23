import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "./client";

interface Enrollment {
    user: string;  
    course: string; 
}

interface EnrollmentState {
    enrollments: Enrollment[];
}
  
const initialState: EnrollmentState = {
    enrollments: [], 
};
  
export const fetchEnrollments = createAsyncThunk<Enrollment[]>(
    "enrollments/fetch",
    async () => {
      return await client.fetchAllEnrollments();
    }
);
  
export const enrollInCourse = createAsyncThunk<Enrollment, { userId: string; courseId: string }>(
    "enrollments/enroll",
    async ({ userId, courseId }) => {
        return await client.enrollUserInCourse(userId, courseId);
    }
);
  
export const unenrollFromCourse = createAsyncThunk<
    { user: string; course: string },
    { userId: string; courseId: string }
    >("enrollments/unenroll", async ({ userId, courseId }) => {
    return await client.unenrollUserFromCourse(userId, courseId);
});
  
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEnrollments.fulfilled, (state, action) => {
            state.enrollments = action.payload;
        });
        builder.addCase(enrollInCourse.fulfilled, (state, action) => {
            state.enrollments.push(action.payload); 
        });
        builder.addCase(unenrollFromCourse.fulfilled, (state, action) => {
            state.enrollments = state.enrollments.filter(
            (enrollment) =>
                enrollment.user !== action.payload.user ||
                enrollment.course !== action.payload.course
            ); 
        });
    },
});
  
  export default enrollmentsSlice.reducer;
  