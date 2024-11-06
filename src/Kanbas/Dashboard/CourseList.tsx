import React from "react";
import CourseCard from "./CourseCard";

export default function CourseList({
  courses,
  enrollments,
  currentUser,
  showAllCourses,
  handleEnrollmentToggle,
  deleteCourse,
  setCourse,
}: {
  courses: any[];
  enrollments: any[];
  currentUser: any;
  showAllCourses: boolean;
  handleEnrollmentToggle: (courseId: string, isEnrolled: boolean) => void;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: any) => void;
}) {
  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {courses
        .filter((course) => {
          if (currentUser.role !== "STUDENT") return true;
          const isEnrolled = enrollments.some(
            (enrollment) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
          );
          return showAllCourses || isEnrolled;
        })
        .map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            currentUser={currentUser}
            enrollments={enrollments}
            handleEnrollmentToggle={handleEnrollmentToggle}
            deleteCourse={deleteCourse}
            setCourse={setCourse}
          />
        ))}
    </div>
  );
}
