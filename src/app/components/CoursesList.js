'use client'
import { useEffect, useState } from 'react';
import  {supabase}  from '../utils/supabase';

export default function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        throw new Error('An error occurred while fetching courses');
      }
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
