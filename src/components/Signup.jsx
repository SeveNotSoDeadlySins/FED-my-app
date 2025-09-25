import { useState } from "react";

export default function Signup() {
    const [signedUp, setSignedUp] = useState(false);
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: '',
        months: 1,
        insurance: true
    });



    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;

        console.log(`Name is: ${name}`);

        setForm({
            ...form,
            [name]: value
            
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Login by user: ${form.username}`);
        setSignedUp(true);
    };


    return (
        <>

            {(signedUp) ? (
                <h2>Thank you for signing up, {form.username}!</h2>
            ) : (
                <>
                    <form onSubmit={handleSubmit} >
                        <label>
                            Username:
                            <input type="text" name="username" value={form.username} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Email: 
                            <input type="text" name="email" value={form.email} onChange={handleChange}/>
                        </label>
                        <br/>

                        <label>
                            Number of Months: 
                            <input type="number" name="months" value={form.months} onChange={handleChange}/>
                        </label>
                        <br/>

                        <label>
                            I wish to recieve your email insurance: 
                            <input type="checkbox" name="insurance" checked={form.insurance} value={form.insurance} onChange={handleChange}/>
                        </label>
                        <br/>


                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                    Hi, {form.username}! You have selected a {form.months} month contract {form.insurance ? "with" : "without"} subscription.
                </>
            )}
        </>
    );
};