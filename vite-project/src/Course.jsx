
const Course1="HTML";
function Course(){
     const styles={
        backgroundColor:"green"
     }
    return(
        <div style={styles}>
            <h1>My Courses</h1>
            <ul>
                <li>{Course1}</li>
                <li>CSS</li>
                <li>typescript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                
            </ul>
        </div>
    );
}

export default Course;
