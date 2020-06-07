import React, { useEffect, Fragment } from 'react';
// import './Home.scss'
import { connect } from "react-redux";
import Post from '../../components/Post/Post';
import { postsAll } from '../../redux/actions/posts';

const Home = (props) => {
    useEffect(() => {
        postsAll()
        console.log(props.posts)
    }, [])

    return (
        <Fragment>
            <div class='container'>
                {(props.posts)?.slice(0, 50).map(post => <Post key={post.id} post={post}/>)}
            </div>
              

            
        </Fragment>
    )
           
        
    
}

// export default Home;

const mapStateToProps = (state) => ({ posts:state.posts })
export default connect(mapStateToProps)(Home);