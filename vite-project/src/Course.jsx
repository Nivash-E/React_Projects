import PropTypes from 'prop-types';

function Course(props){
           return(
        <div className="card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
             <p>{props.price}</p>
             <span>{props.rating}</span>
        </div>
    );

    }

Course.propTypes = {
    name : PropTypes.string,
    price : PropTypes.number,
    img : PropTypes.string,
    rating : PropTypes.number
}


export default Course;
