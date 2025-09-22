import { useState } from 'react';


const Clicky = () => {
    const [count, setCount] = useState(0);    

    const handleClick = () => {
        setCount(count + 1);
    }

    return(
        <>
            <h2>You have clicked the {count} button.</h2>

            <button onClick={handleClick}>Click me</button>
        </>
    );

};

export default Clicky;