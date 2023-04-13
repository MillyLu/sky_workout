import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { get, child, ref } from "@firebase/database";
import db from "../firebase";


export const coursesApi = createApi({
    reducerPath: "courses",
    baseQuery: fakeBaseQuery(),
    // tagTypes: [""],

    endpoints: (builder) => ({
        getCourses: builder.query({
          async queryFn() {
            try {
              const dbRef = ref(db);
              const courses = await get(child(dbRef, 'courses'));
              const coursesList = Object.values(courses.val());
    
              return { data: coursesList };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          },
        //  providesTags: ['Courses']
        }),

        getCourseById: builder.query({
          async queryFn(id) {
            try {
              const dbRef = ref(db);
              const course = await get(child(dbRef, `courses/${id}`));
              return { data: course.val() };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          }
        }),

        getWorkouts: builder.query({
          async queryFn() {
            try {
              const dbRef = ref(db);
              const workouts = await get(child(dbRef, 'workouts'));
              const workoutsList = Object.values(workouts.val());
    
              return { data: workoutsList };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          },
        }),
    
       /* addUser: builder.query({
        async newUser(newUser) {
            try {
                const addClient = await db().ref('clients').push(newUser)
                console.log(addClient)
            } catch (error) {
                console.log(error.message)
                throw error
                
            }
        }
          }), */
    }) 
});

export const { useGetCoursesQuery, useGetWorkoutsQuery, useGetCourseByIdQuery } = coursesApi;