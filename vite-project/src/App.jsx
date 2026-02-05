import './App.css';
import Course from './Course.jsx';
import One from './assets/one.jpg';
import Two from './assets/two.jpg';
import Three from './assets/three.jpg';



function App() {

  return (
    <>
    <Course name="Sivan Frame1" price="$100" img={One} show={true}  rating= {4.5}/>
    <Course name="Sivan Frame2" price="$200" img={Two} show={true} rating={4.2}/>
    <Course name="Sivan Frame3" price="$300" img={Three} show={true} rating={4.8}/>
    </>
  )
}

export default App
