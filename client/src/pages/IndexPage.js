import { useEffect, useState } from "react";
import Post from "../Post.js";
export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post", { mode: "cors" }).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map((post, i) => <Post key={i} {...post} />)}
      {posts.length == 0 && (
        <div>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      )}
    </>
  );
}
