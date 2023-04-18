import { Course } from "../../components/CourseType/CourseType.jsx";
import s from "../../components/CourseType/CourseType.module.css";
import { useGetCourseByIdQuery } from "../../services/courses.js";

export const StepAerobics = () => {
  const id = 'ab5c7n';
  const { data = [] } = useGetCourseByIdQuery(id);

  return (
    <Course
      fon={`${s.skill_card_stepaerobics}`}
      name={data.name}
      cause1={data.cause?.[0]}
      cause2={data.cause?.[1]}
      cause3={data.cause?.[2]}
      directions1={`• ${data.directions?.[0]}`}
      directions2={`• ${data.directions?.[1]}`}
      directions3={`• ${data.directions?.[2]}`}
      definition={data.definition}
      description={data.description}
    />
  );
};
