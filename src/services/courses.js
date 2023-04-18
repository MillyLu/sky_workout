import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { get, child, ref, set, update } from "@firebase/database";
import db from "../firebase";


export const coursesApi = createApi({
    reducerPath: "courses",
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Courses'],

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
         providesTags: ['Courses']
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

        getAllWorkoutsInCourse: builder.query({
          async queryFn(id) {
            try {
              const dbRef = ref(db);
              const workouts = await get(child(dbRef, `courses/${id}/workouts`));
              return { data: workouts.val() };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          }
        }),

        getAllExerciseInWorkouts: builder.query({
          async queryFn(id) {
            try {
              const dbRef = ref(db);
              const exercise = await get(child(dbRef, `workouts/${id}/exercise`));
              return { data: exercise.val() };
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

        getWorkoutById: builder.query({
          async queryFn(id) {
            try {
              const dbRef = ref(db);
              const workout = await get(child(dbRef, `workouts/${id}`));
              return { data: workout.val() };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          }
        }),

        getloginById: builder.query({
          async queryFn(id) {
            try {
              const dbRef = ref(db);
              const login = await get(child(dbRef, `users/${id}/username`));
              return { data: login.val() };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          }
        }),

        getExerciseById: builder.query({
          async queryFn(id) {
            try {
              const dbRef = ref(db);
              const exercise = await get(child(dbRef, `exercises/${id}`));
              return { data: exercise.val() };
            } catch (e) {
              console.log(e);
              return { error: e };
            }
          }
        }),
    
        addUser: builder.mutation({
          async queryFn(payload) {
            try {
              const userAdd = await set(ref(db, 'users/' + payload.id), {
                  _id: payload.id,
                  username: payload.username                
              });
               return{userAdd}; 
              }
             catch (error) {
                console.log(error.message)                
            }
        }
          }), 

          updateUserLogin: builder.mutation({
            async queryFn(payload) {
              try {
                const userLogin = await update(ref(db, 'users/' + payload.id), {
                    _id: payload.id,
                    username: payload.username                
                });
                 return{userLogin}; 
                }
               catch (error) {
                  console.log(error.message)                
              }
          }
            }), 

          getUserCourses: builder.query({
            async queryFn(id) {
              try {
                const dbRef = ref(db);
                const userCourses = await get(child(dbRef, `users/${id}/courses`));
                return { data: userCourses.val() };
              } catch (e) {
                console.log(e);
                return { error: e };
              }
            }
          }),

          addCourseToUser: builder.mutation({
            async queryFn(payload) {
              try {
                const dbRef = ref(db);
                const queryUserCourses = await get(child(dbRef, 'users/' + payload.id + '/courses'));
                const userCourses = queryUserCourses.val();
                
                if(userCourses === null) {
                  await update(ref(db, 'users/' + payload.id), {
                    courses: [payload.courseId]
                  })
                } else {
                  if(Object.values(userCourses).includes(payload.courseId)) 
                   {return} else {
                    userCourses.push(payload.courseId);
                    await update(ref(db, 'users/' + payload.id), {
                      courses: userCourses
                })
                }
              }
            }
               catch (error) {
                  console.log(error.message)                
              }
          }
            }), 
    }) 
});

export const { useGetCoursesQuery, useGetWorkoutsQuery, useGetCourseByIdQuery, useGetWorkoutByIdQuery, useGetExerciseByIdQuery, useAddUserMutation, useAddCourseToUserMutation, useGetUserCoursesQuery, useGetloginByIdQuery, useGetAllWorkoutsInCourseQuery, useGetAllExerciseInWorkoutsQuery, useUpdateUserLoginMutation } = coursesApi;