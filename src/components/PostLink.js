import React from "react";
import { Link } from "gatsby";

export default ({ post }) => (
    <Link to={post.frontmatter.path}>
        {post.frontmatter.date} | {post.frontmatter.title}
    </Link>
)
