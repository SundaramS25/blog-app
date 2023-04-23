import React from "react";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  content,
  cover,
  createdAt,
  author,
}) {
  console.log(typeof _id);
  var st = _id;
  return (
    <div className="post">
      <div className="image">
        <Link to={"/post/" + _id}>
          {_id && <img src={"http://localhost:4000/" + cover} alt="blog-img" />}
        </Link>
      </div>
      <div className="texts">
        <Link to={"/post/" + _id}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author?.username}</a>
          <time>{createdAt}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
