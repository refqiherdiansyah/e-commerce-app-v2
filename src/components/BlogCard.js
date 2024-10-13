import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="Blog-Card">
            <div className="card-images">
                <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">1 October 2024</p>
                <h5 className="title"> A beatiful sunday morning renaissance</h5>
                <p className="desc"> Lorem iptum dolar sit amet cosntructur adipisting elut. atque queserat accustra office</p>
                <Link to="/blog/:id" className="button">
                Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;