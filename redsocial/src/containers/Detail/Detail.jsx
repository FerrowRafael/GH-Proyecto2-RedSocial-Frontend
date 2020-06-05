import React, { Component, Fragment } from 'react'
import axios from "axios";
import './Detail.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories";
import { postsAll } from "../../redux/actions/posts"
import { comentariosPost, comentar } from "../../redux/actions/comments";
import { addLike, dislike, likesPost } from "../../redux/actions/likes";
import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Row, Col, Card, Button, notification,Input } from 'antd';
// import { useLocation, useParams } from 'react-router-dom'

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postactual: {},
            liked: false,
            text: '',
            
        };
        this.dalelike = this.dalelike.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        this.setState({ postactual:((this.props.posts)?.find(post => post.id == id))})
        console.log(this.state.postactual);
        // let checklike = this.state.postactual?.likes?.find(like => like?.pivot.user_id === "1");
        // console.log(checklike);
        // (checklike ? this.setState({liked: true}) : this.setState({liked: false})) 
        console.log(this.state.liked)
        console.log(this.checklike)
        categoriesAll();
        comentariosPost(id);
        likesPost(id)
    }

    // LIKES
    dalelike() {
        const hola = (this.state.postactual?.likes)?.map(like => like.pivot);
        console.log(this.checklike);
        let post_id= this.props.match.params.id;
        this.togglelikestate()
        addLike(post_id); 
        postsAll();
    }

    daledislike() {
        this.togglelikestate()
        let post_id= this.props.match.params.id;
        dislike(post_id);
        postsAll();
    }
    /* fin LIKES */
    
    togglelikestate(){
        this.setState({
            liked: !this.state.liked
        });
        console.log(this.state.liked)
    }

    // COMENTARIOS
    handleSubmit(event) {
        event.preventDefault();
        let text = this.state.text
        let post_id = this.props.match.params.id;
        console.log(text, post_id)
        comentar({text}, post_id); 
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.text);
    //     event.preventDefault();
    //   }

    render() {
        const label = this.state.liked ? <button className="btn" onClick={()=>this.daledislike()}>
        <LikeFilled /></button> : <button className="btn" onClick={()=>this.dalelike()}>
        <LikeOutlined /></button>
        return (
            <Fragment>
                <Card className="tarjeta" justify style={{ width: 930, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'  }}>
                    <Row class="columns">
                        <div class="column is-half" span={12}>
                            <img class="imgDetail" width="100%" src={this.state.postactual?.image_path} alt=""/>
                        </div>

                        <div class="column is-half" span={12}>
                            <p>{this.state.postactual?.category?.name}</p>
                            <h3 >{this.state.postactual?.title}</h3>
                            <p style={{ fontSize:'14px'  }}>{this.state.postactual?.text}</p>
                            <Row>
                                <p>Likes <a>{this.props.likes_post?.length}</a> </p>
                                {(this.props.likes_post)?.map(like => <a class="navbar-item"> {like?.user_id} </a>)}
                            </Row>
                            
                            <Row>
                                <img width="40px" src={this.props.user?.image_path} alt=""/>
                                <p>{this.state.postactual?.user?.nickname}</p>
                                <Button>Seguir</Button>
                            </Row>

                                {/* COMENTARIOS */}
                                <Col style={{padding:'0px'}}class="navbar-item comments">
                                    <p><strong>Comentarios</strong></p>
                                    <div style={{width:'400px', height:'200px', overflow:'scroll'}}>
                                        {(this.props?.comments_post)?.map(com =>
                                        <article className="media">
                                            <figure className="media-left">
                                                <p className="image is-48x48">
                                                    <img src={com?.user?.image_path} alt="Avatar" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <Card className="content ">
                                                    <p>
                                                   {com?.user?.nickname}
                                                    <br />
                                                    {com?.text}
                                                    </p>
                                                </Card>
                                            </div>

                                        </article>)}
                                    </div>
                                    <div>
                                        <Row style={{ display:'flex', justifyContent:'space-around', marginTop:'15px'  }}>
                                            <p className="image is-48x48">
                                                <img src={this.props.user.image_path} alt="Avatar" />
                                            </p>
                                            <form onSubmit={this.handleSubmit}>
                                                <div>
                                                    <label>
                                                        <textarea className="inputs" type="text" value={this.state.text} onChange={this.handleChange} />
                                                    </label>
                                                </div>
                                                <div>
                                                    <input style={{ display:'flex', justifyContent:'flexEnd'  }}class="button" type="submit" value="Hecho" />
                                                </div>
                                            </form>
                                        </Row>
                                        
                                    </div>
                                </Col>

                                <div className="customContainer">
                                    {label}
                                </div>
                                {/* <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">
                                        Elige Categoria
                                    </a>

                                    <div class="navbar-dropdown">
                                        {(this.props.categories)?.map(category => <a class="navbar-item"> {category?.name}</a>)}

                                    </div>
                                </div> */}
                            </div>

                        </Row>
                    </Card>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ 
    posts: state.posts,
    categories: state.categories, 
    user: state.user, 
    postDetail: state.postDetail,
    comments_post: state.comments_post  ,
    likes_post: state.likes_post 
})
export default connect(mapStateToProps)(Detail);