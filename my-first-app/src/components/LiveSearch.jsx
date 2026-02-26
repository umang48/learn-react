import { useState, useEffect } from "react";

function LiveSearch() {
  const [query, setQuery] = useState(""); // State to hold the search query
  const [posts, setPosts] = useState([]); // State to hold the fetched posts
  const [filteredPosts, setFilteredPosts] = useState([]); // State to hold the filtered posts based on the search query

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            setPosts(data); // Store the fetched posts in state
            setFilteredPosts(data); // Initialize filtered posts to all posts
          })
          .catch((error) => console.error("Error fetching posts:", error));
    }, []); // Empty dependency array means this effect runs once when the component mounts
  

    useEffect(() => {
        const filtered = posts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPosts(filtered); // Update the filtered posts based on the search query
      }, [query, posts]); // This effect runs whenever the search query or the list of posts changes

  return (
    <div>
        <input
          type="text"
          placeholder="Search posts by title..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p>Showing {filteredPosts.length} posts</p>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default LiveSearch;