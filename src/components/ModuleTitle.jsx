const ModuleTitle = (props) => {
    console.log(props);
    return(
        <>
            
            <h2>Welcome to the { props.title } module. </h2>
            <p>There are { props.students } students in the school.</p>
        </>
    );
}

export default ModuleTitle;