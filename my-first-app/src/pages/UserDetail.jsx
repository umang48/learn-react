import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api"; // Import the configured Axios instance
function UserDetail() {
const { id } = useParams();
const [user, setUser] = useState(null);
const [posts, setPosts] = useState([]);
useEffect(() => {
    fetchData();
}, [id]);

const fetchData = async () => {
try {
const [userResponse, postsResponse] = await Promise.all([
api.get(`/users/${id}`),
api.get(`/posts?userId=${id}`)
]);
setUser(userResponse.data);
setPosts(postsResponse.data);
}
catch (error) {
console.error("Error fetching user details:", error);
}
}

if (!user) {
    return <div>Loading...</div>;
}

return (
    <div>
        <Link to="/users" className="text-blue-600 hover:underline text-sm">Back to Users</Link>
        <h1>{user.name}</h1>    
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
        <p className="text-gray-600">📧 {user.email}</p>
        <p className="text-gray-600">🌐 {user.website}</p>
        <p className="text-gray-600">🏢 {user.company.name}</p>
        <p className="text-gray-600">📍 {user.address.city}</p>
      </div>

      {/* Posts */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts by {user.name}</h2>
      <div className="grid gap-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 capitalize">{post.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
);

}
export default UserDetail;