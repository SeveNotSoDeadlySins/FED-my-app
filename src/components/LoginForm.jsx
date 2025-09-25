import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Login by user: ${username}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleChange}/>
                </label>
                {/* <label>
                    Password:
                    <input type="password" value={password} onChange={handleChange}/>
                </label> */}


                <input type="submit" value="Submit" />
            </form>


        </>
    );
};