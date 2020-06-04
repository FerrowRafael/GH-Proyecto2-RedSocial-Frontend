import React from 'react'
import { Link } from 'react-router-dom'
import './Post.scss'

const Post = ({ post }) => {

    return (
        <Link key={post._id} to={'/post/'+post.id}>
            <img className="postImg" src={post.image_path} alt="" />
        </Link>

        // <body>
        //     <div class='container'>
        //         <div>
        //             <img className="postImg"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbwy5hxX7ff_m0Ihj0mrzf8XVbdakQ_boPtH-0aekfsUOyB1z' />
        //         </div>
        //     </div>
        // </body>
    )
}
export default Post;