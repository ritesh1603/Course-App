
const CourseCard = ({ course }) => {
    const thumbnailStyle = {
      backgroundImage: `url(${course.image_url})`,
    };
  
    return (
      <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg hover:bg-gray-100">
        <div className="relative">
          <div
            className="h-32 bg-cover bg-center flex items-center justify-center"
            style={thumbnailStyle}
          >
            <h3 className="text-white text-lg font-semibold bg-gray-800 bg-opacity-75 p-2 rounded">
              {course.title}
            </h3>
          </div>
          <div className="p-4">
            {/* <h3 className="text-xl font-bold mb-2">{course.title}</h3> */}
            <p className="text-gray-700 mb-4">{course.description}</p>
            <p className="text-gray-600">{course.instructor}</p>
            <p className="text-gray-600">{course.category}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseCard;