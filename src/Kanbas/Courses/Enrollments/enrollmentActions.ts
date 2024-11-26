import { enrollCourse, unenrollCourse } from './reducer'; 

export const enrollInCourse = (userId: string, courseId: string) => enrollCourse({ userId, courseId });

export const unenrollFromCourse = (userId: string, courseId: string) => unenrollCourse({ userId, courseId });

  