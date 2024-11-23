import axios from "axios";

const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};

export const fetchEnrollmentsForUser = async (userId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
  return data;
};

export const fetchEnrollmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/course/${courseId}`);
  return data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.post(ENROLLMENTS_API, { user: userId, course: courseId });
  return data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.delete(ENROLLMENTS_API, { data: { user: userId, course: courseId } });
  return data;
};
