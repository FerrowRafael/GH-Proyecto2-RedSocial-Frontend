import React, { useEffect, Fragment } from 'react';
// import './Home.scss'
import { connect } from "react-redux";
import Post from '../../components/Post/Post';
import Footer from '../../components/Footer/Footer';
import { postsAll, postDetailDelete } from '../../redux/actions/posts';

const Home = (props) => {
    useEffect(() => {
        postsAll()
        postDetailDelete()
    }, [])

    return (
        <Fragment>
            <div class='container'>
                {(props.posts)?.slice(0, 50).map(post => <Post key={post.id} post={post}/>)}
            </div> 
            <Footer/>
        </Fragment>
    )
           
        
    
}

// export default Home;

const mapStateToProps = (state) => ({ posts:state.posts.posts })
export default connect(mapStateToProps)(Home);