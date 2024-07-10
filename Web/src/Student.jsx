import PropType from 'prop-types'

/* eslint-disable react/prop-types */
function Student(props) {

    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// check type if error => displat in console
Student.prototype = {
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.boolean,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student