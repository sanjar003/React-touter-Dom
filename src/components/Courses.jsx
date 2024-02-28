import { Link, useLocation } from "react-router-dom";
import courses from "../data/courses";


const Courses = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
