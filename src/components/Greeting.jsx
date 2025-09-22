const Greeting = (props) => {
    console.log(props);
    return(
        <>
            <br>
            </br>
            <h3>The name { props.name } contains {props.name.length} characters! </h3>
        </>
    );
}

export default Greeting;