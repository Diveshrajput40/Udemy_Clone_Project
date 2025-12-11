import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import Courses from "../Pages/Courses.jsx";
import CourseDetails from "../Components/CourseDetails.jsx";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const privateRoutes = [
  {
    path: "/courses",
    element: (
      <PrivateRoute>
        <Courses />
      </PrivateRoute>
    ),
  },
  {
    path: "/courses/:id",  
    element: (
      <PrivateRoute>
        <CourseDetails />
      </PrivateRoute>
    ),
  },
];

export default privateRoutes;

