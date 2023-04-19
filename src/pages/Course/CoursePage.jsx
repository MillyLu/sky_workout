import { useParams } from "react-router";
import { CourseMode } from "../../components/CourseMode/CourseMode";
//import s from "../../components/CourseType/CourseType.module.css";
//import { useGetCourseByIdQuery } from "../../services/courses.js";

export function CoursePage() {
  const id = useParams();
  console.log(id);
 // const { data = [] } = useGetCourseByIdQuery(id);

  return (
    <CourseMode id={id}

    />
  );
};