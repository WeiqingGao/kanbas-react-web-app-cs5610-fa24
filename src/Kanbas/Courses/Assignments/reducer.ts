import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as client from "./client";

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  availableFrom: string;
  availableUntil: string;
  dueDate: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

export const fetchAssignments = createAsyncThunk<Assignment[]>(
  "assignments/fetchAssignments",
  async () => {
    return await client.fetchAllAssignments();
  }
);

export const addNewAssignment = createAsyncThunk<Assignment, Assignment>(
  "assignments/addNewAssignment",
  async (assignment) => {
    return await client.createAssignment(assignment);
  }
);

export const deleteExistingAssignment = createAsyncThunk<string, string>(
  "assignments/deleteExistingAssignment",
  async (assignmentId) => {
    await client.deleteAssignment(assignmentId);
    return assignmentId;
  }
);

export const updateAssignment = createAsyncThunk<Assignment, Assignment>(
    "assignments/updateAssignment",
    async (assignment) => {
        return await client.updateAssignment(assignment);
    }
);

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAssignments.fulfilled, (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    });
    builder.addCase(addNewAssignment.fulfilled, (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload);
    });
    builder.addCase(deleteExistingAssignment.fulfilled, (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter((a) => a._id !== action.payload);
    });
  },
});

export default assignmentsSlice.reducer;
