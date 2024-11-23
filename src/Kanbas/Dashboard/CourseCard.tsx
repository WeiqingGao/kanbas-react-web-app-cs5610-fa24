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

  const studentButtons = currentUser.role === "STUDENT" && (
    <>
      <button
        className={`btn ${isEnrolled ? "btn-danger" : "btn-success"} btn-sm me-2`}
        onClick={() => handleEnrollmentToggle(course._id, isEnrolled)}
      >
        {isEnrolled ? "Unenroll" : "Enroll"}
      </button>
      {isEnrolled && (
        <Link
          to={`/Kanbas/Courses/${course._id}/Home`}
          className="btn btn-primary btn-sm"
        >
          Go to Course
        </Link>
      )}
    </>
  );

  const facultyButtons = currentUser.role === "FACULTY" && (
    <>
      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary btn-sm me-2">
        Go
      </Link>
      <button
        onClick={() => deleteCourse(course._id)}
        className="btn btn-danger btn-sm me-2 float-end"
        id="wd-delete-course-click"
        style={{ padding: "10px 10px", fontSize: "16px", width: "70px", height: "40px" }}
      >
        Delete
      </button>
      <button
        onClick={() => setCourse(course)}
        className="btn btn-warning btn-sm float-end"
        id="wd-edit-course-click"
        style={{ padding: "10px 10px", fontSize: "16px", width: "70px", height: "40px" }}
      >
        Edit
      </button>
    </>
  );

  return (
    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
      <div className="card rounded-3 overflow-hidden">
        <img src="/images/reactjs.jpg" width="100%" height={160} alt="" />
        <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title" style={{ fontSize: "21px", fontWeight: "bold" }}>
            {course.name}
          </h5>
          <p className="card-text overflow-y-hidden" style={{ maxHeight: 100, fontSize: "16px" }}>
            {course.description}
          </p>
          <div className="d-flex align-items-center justify-content-between mt-3 flex-nowrap">
            {studentButtons}
            {facultyButtons}
          </div>
        </div>
      </div>
    </div>
  );
}
