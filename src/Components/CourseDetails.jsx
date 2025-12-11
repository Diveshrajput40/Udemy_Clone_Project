import { useParams, useNavigate } from "react-router-dom";
import reactImg from "../assets/react.jpg";
import advReactImg from "../assets/adv-react.jpg";
import nodeImg from "../assets/node.jpg";
import jsImg from "../assets/js.jpg";
import tailwindImg from "../assets/tailwind.jpg";
import mernImg from "../assets/mern.jpg";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    desc: "Learn React from scratch with hands-on projects.",
    level: "Beginner",
    image: reactImg,
    price: 999,
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    desc: "Master hooks, context, and performance optimizations.",
    level: "Advanced",
    image: advReactImg,
    price: 1499,
  },
  {
    id: 3,
    title: "Node.js & Express",
    desc: "Build backend APIs using Node and Express.",
    level: "Intermediate",
    image: nodeImg,
    price: 1299,
  },
  {
    id: 4,
    title: "JavaScript Deep Dive",
    desc: "Understand JS in-depth: closures, async, prototypes.",
    level: "Intermediate",
    image: jsImg,
    price: 1099,
  },
  {
    id: 5,
    title: "Tailwind CSS UI",
    desc: "Create responsive UIs using Tailwind.",
    level: "Beginner",
    image: tailwindImg,
    price: 899,
  },
  {
    id: 6,
    title: "Full Stack MERN",
    desc: "Complete MERN project with deployment.",
    level: "Advanced",
    image: mernImg,
    price: 1999,
  },
];

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <h2 className="text-center mt-20">Course not found</h2>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-5xl w-full rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        {/* ✅ Left Image */}
        <div className="-200 flex items-center justify-center p-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>

        {/* ✅ Right Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">{course.title}</h2>

            <p className="text-gray-600 mb-4">{course.desc}</p>

            <p className="mb-2">
              Level:{" "}
              <span className="font-semibold text-blue-600">
                {course.level}
              </span>
            </p>

            <p className="text-2xl font-bold text-green-600 mt-4">
              ₹ {course.price}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            {/* <button className="flex-1 bg-blue-600 text-black py-3 rounded-lg hover:bg-blue-700">
              Buy Now
            </button> */}

            <button
              className="flex-1 relative overflow-hidden rounded-xl px-6 py-3 font-semibold text-white 
                  bg-gradient-to-r from-blue-500 to-indigo-600 
                  hover:from-indigo-600 hover:to-blue-700 
                   transition-all duration-300 ease-in-out 
                   shadow-lg hover:shadow-indigo-500/50 
                   active:scale-95"
            >
              <span className="relative z-10">Buy Now</span>

              {/* Glow Layer */}
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-400 py-3 rounded-lg"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
