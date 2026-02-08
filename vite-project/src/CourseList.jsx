import Course from './Course.jsx';
import One from './assets/one.jpg';
import Two from './assets/two.jpg';
import Three from './assets/three.jpg';
import murugan1 from './assets/murugan1.jpg';
import murugan2 from './assets/murugan2.jpg';
import murugan3 from './assets/murugan3.jpg';
import ganapathi1 from './assets/ganapathi1.jpg';
import ganapathi2 from './assets/ganapathi2.jpg';
import ganapathi3 from './assets/ganapathi3.jpg';

function CourseList(){
    
        const frames = [
            {
                id:1,
                name: "Sivan Frame1",
                price: 100,
                img: One,
                rating : 5.0
            },
            {
                id:2,
                name: "Sivan Frame2",
                price: 200,
                img: Two,
                rating : 4.3
            },
            {  
                id:3,
                name: "Sivan Frame3",
                price: 300,
                img: Three,
                rating : 4.8
            },
            {  
                id:4,
                name: "Murugan Frame1",
                price: 200,
                img: murugan1,
                rating : 4.8
            },
            {  
                id:5,
                name: "Murugan Frame2",
                price: 300,
                img: murugan2,
                rating : 4.5
            },
            {  
                id:6,
                name: "Murugan Frame3",
                price: 400,
                img: murugan3,
                rating : 5.0
            },
            {  
                id:7,
                name: "Ganapathi Frame1",
                price: 250,
                img: ganapathi1,
                rating : 5.0
            },
            {  
                id:6,
                name: "Ganapathi Frame2",
                price: 350,
                img: ganapathi2,
                rating : 4.3
            },
            {  
                id:8,
                name: "Ganapathi Frame3",
                price: 400,
                img: ganapathi3,
                rating : 4.9
            },
        ]

        frames.sort((a,b) => b.rating - a.rating);

        const topPriceFrames = frames.filter(course => course.price >= 300);

        const courseList = topPriceFrames.map((course,index) =><Course key={index} name={course.name}
         price={course.price} img={course.img}
          rating={course.rating}/>)
    return(
        <>
        {courseList}
        </>
    );
    
}

export default CourseList;
