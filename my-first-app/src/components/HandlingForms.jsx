
import { useState } from "react";

function HandlingForms() {

const [email, setEmail] = useState(""); // State to hold the email input value
const [password, setPassword] = useState(""); // State to hold the password input value

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Email:", email);
    console.log("Password:", password);
}

return (
<form onSubmit={handleSubmit}>
    <div>
        <label>Email:</label>
        <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <label>Password:</label>
        <input type="password" value = {password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type="submit">Submit</button>
</form> 

);

}

export default HandlingForms;