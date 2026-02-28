import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
function UserDetail() {
const { id } = useParams();
const [user, setUser] = useState(null);
const [posts, setPosts] = useState([]);
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error("Error fetching user details:", error));
    
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error("Error fetching user posts:", error));
}, [id]);
if (!user) {
    return <div>Loading...</div>;
}

return (
    <div>
        <Link to="/users">Back to Users</Link>
        <h1>{user.name}</h1>    
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company?.name}</p>      
        <h2>Posts by {user.name}</h2>
        <ul>
            {posts.map(post => (        
                <li key={post.id}>
                    {post.title}
                </li>   
            ))}
        </ul>
    </div>
);

}
export default UserDetail;