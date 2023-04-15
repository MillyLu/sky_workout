import { Course } from "../../components/CourseType/CourseType.jsx";
import s from "../../components/CourseType/CourseType.module.css";
import { useGetCourseByIdQuery } from "../../services/courses.js";

export const Yoga = () => {
  const id = 'ab1c3f';
  const { data = [] } = useGetCourseByIdQuery(id);

  return (
    <Course
      fon={`${s.skill_card_yoga}`}
      name={data.name}
      url={"https://www.youtube.com/embed/oqe98Dxivns"}
      cause1={data.cause?.[0]}
      cause2={data.cause?.[1]}
      cause3={data.cause?.[2]}
      directions1={`• ${data.directions?.[0]}`}
      directions2={`• ${data.directions?.[1]}`}
      directions3={`• ${data.directions?.[2]}`}
      directions4={`• ${data.directions?.[3]}`}
      directions5={`• ${data.directions?.[4]}`}
      directions6={`• ${data.directions?.[5]}`}
      definition={data.definition}
      description={data.description}
    />
  );
};