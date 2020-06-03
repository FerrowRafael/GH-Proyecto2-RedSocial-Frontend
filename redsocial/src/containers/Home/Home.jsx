import React, { useEffect, Fragment } from 'react';
// import './Home.scss'
import { connect } from "react-redux";
import Post from '../../components/Post/Post';
import { Col, Row, Input, Badge } from 'antd';
import { postsAll } from '../../redux/actions/posts';
import { PlusCircleOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    useEffect(() => {
        postsAll()
        console.log(props.posts)
    }, [])

    return (
        <Fragment>
            <Row gutter={[8, 60]}>
                <Col className="gutter-row" span={4}>
                    <div className="posts">
                        {(props.posts)?.map(post => <Post key={post._id} post={post}/>)}
                    </div>
                </Col>
            </Row>

            <NavLink to="/pin-builder" exact>
                <Badge >
                    <PlusCircleOutlined style={{ fontSize: '32px' }} />
                </Badge>
            </NavLink>
        </Fragment>
    )
           
        
    
}

// export default Home;

const mapStateToProps = (state) => ({ posts:state.posts })
export default connect(mapStateToProps)(Home);