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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>
            <div className="grid grid-cols-1 gap-4">
                {users.map(user => (
                    <Link to={`/users/${user.id}`} key={user.id}>
                         <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-blue-400 transition">
                        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-gray-500 text-sm">📧 {user.email}</p>
                        <p className="text-gray-500 text-sm">🌐 {user.website}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>    
    );
}
export default Users;