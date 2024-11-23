import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import { useState, useEffect } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";

interface Course {
  _id: string;
  name: string;
  description?: string;
}

export default function Kanbas() {
    const [courses, setCourses] = useState<Course[]>([]); // 课程列表
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null); // 当前选择的课程
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchCourses = async () => {
        try {
            console.log("Fetching courses for current user...");
            const fetchedCourses = await userClient.findMyCourses();
            setCourses(fetchedCourses);
            console.log("Courses fetched successfully:", fetchedCourses);
        } catch (error) {
            console.error("Failed to fetch courses:", error);
            alert("Error fetching courses. Please try again later.");
        }
    };

    useEffect(() => {
        if (currentUser) {
            console.log("Current user detected:", currentUser);
            fetchCourses();
        }
    }, [currentUser]);

    const addNewCourse = () => {
        const newCourse: Course = {
            _id: new Date().getTime().toString(),
            name: "New Course",
            description: "Default course description",
        };
        setCourses((prevCourses: Course[]) => [...prevCourses, newCourse]);
        console.log("New course added:", newCourse);
    };

    const deleteCourse = (courseId: string) => {
        setCourses((prevCourses: Course[]) =>
            prevCourses.filter((course) => course._id !== courseId)
        );
        console.log("Course deleted:", courseId);
    };

    const updateCourse = () => {
        if (!selectedCourse) {
            console.warn("No course selected for update.");
            return;
        }
        setCourses((prevCourses: Course[]) =>
            prevCourses.map((course) =>
                course._id === selectedCourse._id ? selectedCourse : course
            )
        );
        console.log("Course updated:", selectedCourse);
    };

    return (
        <Session>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route
                            path="/Dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard
                                        courses={courses}
                                        course={selectedCourse}
                                        setCourse={setSelectedCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                    />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="Courses/:cid/*"
                            element={
                                <ProtectedRoute>
                                    <Courses courses={courses} />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}
