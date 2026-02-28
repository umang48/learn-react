import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
function Users () {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") 
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                        {user.name} - {user.email}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>    
    );
}
export default Users;