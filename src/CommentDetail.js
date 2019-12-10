import React from "react";

const CommentDetail = props => {
    // console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">Today at 7pm</span>
                </div>
                <div className="text">Nice blog post</div>
            </div>
        </div>
    );
};

export default CommentDetail;
