import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import * as db from "../../Database";

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
    assignments: db.assignments.map((assignment) => ({
      ...assignment,
      description: "No description provided.",
      points: 100,
      availableFrom: "2024-05-01",
      availableUntil: "2024-05-20",
      dueDate: "2024-05-15",
    })),
  };

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments.push(action.payload);
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const index = state.assignments.findIndex((a) => a._id === action.payload._id);
            if (index !== -1) {
                state.assignments[index] = action.payload;
            }
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter((a) => a._id !== action.payload);
        },
    },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
