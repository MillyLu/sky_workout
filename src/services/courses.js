import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { get, child, ref, push } from "@firebase/database";
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
    
        addUser: builder.mutation({
        async queryFn(payload) {
            try {
              const userRef = ref(db, 'users/' + payload.uid)
              const userAdd = await push(userRef, {
                  username: payload.login,
                  email: payload.email,
                //  profile_picture : imageUrl
               })
               return{userAdd}; 
              }

              
               
             catch (error) {
                console.log(error.message)
                
            }
        }
          }), 
    }) 
});

export const { useGetCoursesQuery, useGetWorkoutsQuery, useGetCourseByIdQuery, useAddUserMutation } = coursesApi;