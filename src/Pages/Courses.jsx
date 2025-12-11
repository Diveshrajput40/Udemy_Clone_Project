import { useNavigate } from "react-router-dom";
import reactImg from "../assets/react.jpg";
import advReactImg from "../assets/adv-react.jpg";
import nodeImg from "../assets/node.jpg";
import jsImg from "../assets/js.jpg";
import tailwindImg from "../assets/tailwind.jpg";
import mernImg from "../assets/mern.jpg";

const courses = [
  { id: 1, title: "React for Beginners", desc: "Learn React from scratch with hands-on projects.", level: "Beginner", image: reactImg },
  { id: 2, title: "Advanced React Patterns", desc: "Master hooks, context, and performance optimizations.", level: "Advanced", image: advReactImg },
  { id: 3, title: "Node.js & Express", desc: "Build backend APIs using Node and Express.", level: "Intermediate", image: nodeImg },
  { id: 4, title: "JavaScript Deep Dive", desc: "Understand JS in-depth: closures, async, prototypes.", level: "Intermediate", image: jsImg },
  { id: 5, title: "Tailwind CSS UI", desc: "Create beautiful responsive UIs using Tailwind.", level: "Beginner", image: tailwindImg },
  { id: 6, title: "Full Stack MERN", desc: "Complete MERN project with auth and deployment.", level: "Advanced", image: mernImg },
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-10">

      <div className="mb-8 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Available Courses
        </h1>
        <p className="text-gray-600 max-w-xl">
          Choose from our industry-focused courses and upgrade your skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/courses/${course.id}`)}  // ✅ YAHAN FIX HUA
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {course.desc}
              </p>

              <span className="text-sm font-medium text-blue-600">
                {course.level}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
