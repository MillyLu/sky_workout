import { Course } from "../../components/CourseType/CourseType.jsx";
import s from "../../components/CourseType/CourseType.module.css";
import { useGetCourseByIdQuery } from "../../services/courses.js";

export const Bodyflex = () => {
  const id = 'ab3c5h ';
  const { data = [] } = useGetCourseByIdQuery(id);

  return (
    <Course
      fon={`${s.skill_card_bodyflex}`}
      name={data.name}
      cause1={data.cause?.[0]}
      cause2={data.cause?.[1]}
      cause3={data.cause?.[2]}
      directions1={`• ${data.directions?.[0]}`}
      directions2={`• ${data.directions?.[1]}`}
      definition={data.definition}
      description={data.description}
    />
  );
};
