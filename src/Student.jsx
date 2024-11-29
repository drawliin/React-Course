
function Student(props){
    return(
        <div>
            <p>Nom: {props.name} Age: {props.age} isStudent: {props.isStudent ? 'Yes' : 'No'} </p>
        </div>
    );
}

export default Student;