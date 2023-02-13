import Post from "../Post";
import Lpost from "../latest_post";
import {useEffect, useState} from "react";
//import Latest from "./latest_blogs";
export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  const [postslatest,setPostslatest] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  useEffect(() => {
    fetch('http://localhost:4000/postlatest').then(response => {
      response.json().then(postslatest => {
        setPostslatest(postslatest);
      });
    });
  }, []);
  return (
    <>
      <div id="nav" className="pad">
      <div className="latest-article">
          {postslatest.length > 0 && postslatest.map(post => (
            <Lpost {...post} />
          ))}
      </div>
      </div>
      <h1>All Articles</h1>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}