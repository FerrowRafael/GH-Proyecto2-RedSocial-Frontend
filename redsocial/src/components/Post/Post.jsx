import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'antd';
import './Post.scss'

const Post = ({ post }) => {

    return (
        <div>
            <Row>
                <Link className="post" key={post._id} to={'/post/'+post.id}>
                    <img src={post.image_path} alt="" />
                </Link>
            </Row>  
        </div>
    )
}
export default Post;