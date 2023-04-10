import { Course } from "../../components/CourseType/CourseType.jsx";
import s from "../../components/CourseType/CourseType.module.css";

export const Yoga = () => {
  return (
    <Course
      fon={`${s.skill_card_yoga}`}
      name={"Йога"}
      url={"https://www.youtube.com/embed/oqe98Dxivns"}
      cause1={"Давно хотели попробовать йогу, но не решались начать."}
      cause2={
        "Хотите укрепить позвоночник, избавиться от болей в спине и суставах."
      }
      cause3={"Ищете активность, полезную для тела и души."}
      directions1={"• Йога для новичков"}
      directions2={"• Классическая йога"}
      directions3={"• Йогатерапия"}
      directions4={"• Кундалини-йога"}
      directions5={"• Хатха-йога"}
      directions6={"• Аштанга-йога"}
      text={
        "Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам."
      }
    />
  );
};
