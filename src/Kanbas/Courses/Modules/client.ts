import axios from "axios";

const ASSIGNMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/assignments`;
const MODULES_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/modules`;

export const fetchAllAssignments = async () => {
  const { data } = await axios.get(ASSIGNMENTS_API);
  return data;
};

export const createAssignment = async (assignment: any) => {
  const { data } = await axios.post(ASSIGNMENTS_API, assignment);
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};

export const deleteModule = async (moduleId: string): Promise<void> => {
    await axios.delete(`${MODULES_API}/${moduleId}`);
};

export const updateModule = async (module: any): Promise<any> => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
};