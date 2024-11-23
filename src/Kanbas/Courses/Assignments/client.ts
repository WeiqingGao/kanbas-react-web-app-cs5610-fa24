import axios from "axios";
import { Assignment } from "./reducer";

const ASSIGNMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/assignments`;

export const fetchAllAssignments = async (): Promise<Assignment[]> => {
  const { data } = await axios.get(ASSIGNMENTS_API);
  return data;
};

export const createAssignment = async (assignment: Assignment): Promise<Assignment> => {
  const { data } = await axios.post(ASSIGNMENTS_API, assignment);
  return data;
};

export const updateAssignment = async (assignment: Assignment): Promise<Assignment> => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string): Promise<void> => {
  await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};
