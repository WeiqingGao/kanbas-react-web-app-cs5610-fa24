import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DashboardHeader from "./DashboardHeader";
import CourseList from "./CourseList";
import { enrollCourse, unenrollCourse, loadEnrollments } from "./enrollmentSlice";
import { RootState } from "../store";
import { User } from "../Account/reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();

  // Redux 状态
  const currentUser = useSelector((state: RootState) => state.accountReducer.currentUser) as User | null;
  const enrollments = useSelector((state: RootState) => state.enrollmentReducer.enrollments);

  // 本地状态
  const [showAllCourses, setShowAllCourses] = useState(false);

  // 加载 enrollments 到 Redux
  useEffect(() => {
    const storedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    if (storedEnrollments.length) {
      dispatch(loadEnrollments(storedEnrollments));
    }
  }, [dispatch]);

  // 保存 enrollments 到 localStorage
  useEffect(() => {
    if (currentUser) {
      const saveEnrollmentsToLocalStorage = () => {
        const userEnrollments = enrollments.filter(
          (enrollment) => enrollment.user === currentUser._id
        );
        localStorage.setItem("enrollments", JSON.stringify(userEnrollments));
      };
      saveEnrollmentsToLocalStorage();
    }
  }, [enrollments, currentUser]);

  // 注册/取消注册课程
  const handleEnrollmentToggle = (courseId: string, isEnrolled: boolean) => {
    if (!currentUser) return;
    if (isEnrolled) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  // 渲染
  return (
    <div id="wd-dashboard">
      {currentUser?.role === "FACULTY" && (
        <>
          <DashboardHeader addNewCourse={addNewCourse} updateCourse={updateCourse} />
          <input
            value={course?.name || ""}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course?.description || ""}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}
      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "View Enrolled Courses" : "View All Courses"}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses</h2>
      <hr />
      <CourseList
        courses={courses}
        enrollments={enrollments}
        currentUser={currentUser}
        showAllCourses={showAllCourses}
        handleEnrollmentToggle={handleEnrollmentToggle}
        deleteCourse={deleteCourse}
        setCourse={setCourse}
      />
    </div>
  );
}
