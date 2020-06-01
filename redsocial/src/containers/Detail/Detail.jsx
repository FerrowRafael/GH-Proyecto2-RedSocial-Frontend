import React, { Component, Fragment } from 'react'
import axios from "axios";
// import { useParams, NavLink } from 'react-router-dom';
import './Detail.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories"; 
import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Row, Col, Card, Button, notification } from 'antd';
import { useLocation, useParams } from 'react-router-dom'

class Detail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
            postactual: {},
            liked: false,
            userId: this.props.match.params.id
        };
        this.dalelike = this.dalelike.bind(this);
    }

    // check() {
    //     (this.checkactual ? this.setState({active: true}) : this.setState({active: false}))
    //     console.log(this.state.active);
    // }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id, this.props.posts)
        this.setState({ postactual:((this.props.posts)?.find(post => post.id == id))})
        console.log(this.state.postactual)
        categoriesAll();
    }


    dalelike() {        
        console.log(this.state.postactual?.id);
        let post_id= this.props.match.params.id;
        this.togglelikestate()
        
            axios.post('http://localhost:8000/api/v1/likes', {post_id},{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('authToken')
                }
            })
                .catch(console.error)
    }

    daledislike() {
        this.togglelikestate()
        let post_id= this.props.match.params.id;
        axios.delete('http://localhost:8000/api/v1/likes' + post_id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('authToken')
            }
        })
            .catch(console.error)
    }

    togglelikestate(){
        this.setState({
            liked: !this.state.liked
        });
    }

    comentar(event){
    
        event.preventDefault();
        console.log(this.state.userId)
        let post_id= this.state?.userId;
        console.log(post_id)
        const comment = {
            text: event.target.text.value,
        }
        axios.post('http://localhost:8000/api/v1/comments/' + post_id, comment,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('authToken')
                }
            })
                .catch(console.error)
    }
      
    render() {

        console.log(this?.state.userId)
        const label = this.state.liked ? <button className="btn" onClick={()=>this.daledislike()}>
        <LikeFilled /></button> : <button className="btn" onClick={()=>this.dalelike()}>
        <LikeOutlined /></button>
        return (
            <Fragment>
                    <Card justify style={{ width: 1200, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'  }}>
                        <Row>
                            <Col span={12}>
                                <img width="100%" src={this.state.postactual?.image_path} alt=""/>
                            </Col>
                       
                            <Col span={12}>
                                <p>Nickname: {this.state.postactual?.user?.nickname}</p>
                                <p>Category: {this.state.postactual?.category?.name}</p>
                                <p class="is-size-3"><strong>{this.state.postactual?.title}</strong></p>
                                <p><strong>{this.state.postactual?.text}</strong></p>

                                {/* COMENTARIOS */}
                                <Col class="navbar-item comments">
                                    <p>Comentarios: </p>
                                    {(this.state.postactual?.comment)?.map(com =>
                                    <article className="media">
                                        <figure className="media-left">
                                            <p className="image is-64x64">
                                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Avatar" />
                                            </p>
                                        </figure>
                                        <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>{com?.user.nickname}</strong>
                                            <br />
                                            {com?.text}
                                            </p>
                                        </div>
                                        </div>
                                        
                                    </article>)}
                                    
                                    <div>
                                        <p>{this.props.user.nickname}</p>
                                        <form className="comentar" onSubmit={this.comentar}>
                                            <div className="field">
                                                <div className="control">
                                                <textarea className="textarea" name="text" placeholder="Add a comment"></textarea>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                <input className="btn" type="submit" value="Comenta" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                       
                                <div className="customContainer">
                                    {label}
                                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">
                                    Elige Categoria
                                    </a>
                                
                                    <div class="navbar-dropdown">
                                        {(this.props.categories)?.map(category => <a class="navbar-item"> {category?.name}</a>)}
                                       
                                    </div>
                                </div>
                            </Col>
                     
                        </Row> 
                    </Card>
                  {/*<Row className="site-card-border-less-wrapper">
                    <Card>
                        <img span={10} src="https://i.pinimg.com/originals/57/6f/32/576f32da8c2856a8875dd6c24f2be29e.jpg" alt=""/>
                    </Card>
                    <Col span={6} className="detail"> */}

                        
                        

                    {/* </Col>
                </Row> */}

                {/* <Row className="product">
                    <Col span={8} offset={6} className="imagen">
                        <img span={10} src="https://i.pinimg.com/originals/57/6f/32/576f32da8c2856a8875dd6c24f2be29e.jpg" alt=""/>
                    </Col>
                    <Col span={6} className="detail">

                        
                        <div>
                            <Col>
                                <p>Nickname</p>
                                <p><strong>{this.postactual?.text}</strong></p>
                                <p>Comentarios:</p>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">
                                    More
                                    </a>

                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">
                                            About
                                        </a>
                                        <a class="navbar-item">
                                            Jobs
                                        </a>
                                        <a class="navbar-item">
                                            Contact
                                        </a>
                                        <hr class="navbar-divider"/>
                                        <a class="navbar-item">
                                            Report an issue
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </div>

                    </Col>
                </Row> */}
            
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ posts: state.posts, categories: state.categories, user: state.user })
export default connect(mapStateToProps)(Detail);