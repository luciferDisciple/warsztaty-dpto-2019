import React from "react";
import { Link } from "gatsby";

export default ({ post }) => (
    <Link to={post.frontmatter.path}>
        <div>
            <p>{post.frontmatter.title}</p>
            <p>{post.frontmatter.description}</p>
            <span>{post.frontmatter.date}</span>
        </div>
    </Link>
)
