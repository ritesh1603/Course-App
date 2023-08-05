import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import CourseCard from '../components/CourseCard';

export default function CoursePage() {
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
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
