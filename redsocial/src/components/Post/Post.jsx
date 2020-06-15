import React from 'react'
import { Link } from 'react-router-dom'
import './Post.scss'
import { postOne } from '../../redux/actions/posts';

const Post = ({ post }) => {
const imagen = 'http://localhost:8000/images/posts/' + post.image_path;
    return (
        <Link key={post.id} to={'/post/'+ post.id}>
            <img className="postImg" src={imagen} alt="" />
        </Link>
    )
}
export default Post;