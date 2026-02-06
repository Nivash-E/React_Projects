import Course from './Course.jsx';
import One from './assets/one.jpg';
import Two from './assets/two.jpg';
import Three from './assets/three.jpg';

function CourseList(){
    
        const courses = [
            {
                name: "Sivan Frame1",
                price: "$100",
                img: One,
                rating : 4.5
            },
            {
                name: "Sivan Frame2",
                price: "$200",
                img: Two,
                rating : 4.2
            },
            {  
                name: "Sivan Frame3",
                price: "$300",
                img: Three,
                rating : 4.8
            },
        ]

        const courseList = courses.map((course) =><Course name={course.name}
         price={course.price} img={course.img}
          rating={course.rating}/>)
    return(
        <>
        {courseList}
        </>
    );
    
}

export default CourseList;
