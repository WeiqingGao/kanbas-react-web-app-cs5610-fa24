import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({
  course,
  currentUser,
  enrollments,
  handleEnrollmentToggle,
  deleteCourse,
  setCourse,
}: {
  course: any;
  currentUser: any;
  enrollments: any[];
  handleEnrollmentToggle: (courseId: string, isEnrolled: boolean) => void;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: any) => void;
}) {
  const isEnrolled = enrollments.some(
    (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
  );

  return (
    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
      <div className="card rounded-3 overflow-hidden">
        <img src="/images/reactjs.jpg" width="100%" height={160} alt="" />
        <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
          <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
            {course.description}
          </p>

          {currentUser.role === "STUDENT" && (
            <>
              <button
                className={`btn ${isEnrolled ? "btn-danger" : "btn-success"} me-2`}
                onClick={() => handleEnrollmentToggle(course._id, isEnrolled)}
              >
                {isEnrolled ? "Unenroll" : "Enroll"}
              </button>
              {isEnrolled && (
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="btn btn-primary"
                >
                  Go to Course
                </Link>
              )}
            </>
          )}

          {currentUser.role === "FACULTY" && (
            <>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                Go
              </Link>
              <button
                onClick={() => deleteCourse(course._id)}
                className="btn btn-danger float-end"
                id="wd-delete-course-click"
              >
                Delete
              </button>
              <button
                onClick={() => setCourse(course)}
                className="btn btn-warning me-2 float-end"
                id="wd-edit-course-click"
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
