import { useParams } from "react-router";
import { CourseMode } from "../../components/CourseMode/CourseMode";

export function CoursePage() {
  const id = useParams();

  return <CourseMode id={id} />;
}
