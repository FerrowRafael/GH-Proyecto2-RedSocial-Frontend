import React, { Component, Fragment } from 'react'
// import axios from "axios";
// import { useParams, NavLink } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
// import {  Button } from 'antd';
import './Detail.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories"; 
import axios from 'axios';

class Detail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
            postactual:{},

        }
    }

    // check() {
    //     (this.checkactual ? this.setState({active: true}) : this.setState({active: false}))
    //     console.log(this.state.active);
    // }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id, this.props.posts)
        this.setState({ postactual:((this.props.posts)?.find(post => post.id == id))})
        categoriesAll();
    }


    render() {
        console.log(this.props)
        return (
            
            
            <Fragment>
                    <Card justify style={{ width: 1200, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'  }}>
                        <Row>
                            <Col span={12}>
                                <img width="100%" src={this.state.postactual?.image_path} alt=""/>
                            </Col>
                       
                            <Col span={12}>
                                <p>Nickname: {this.state.postactual?.user?.nickname}</p>
                                <p><strong>{this.state.postactual?.text}</strong></p>
                                <p>Comentarios:</p>
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

const mapStateToProps = (state) => ({ posts: state.posts, categories: state.categories })
export default connect(mapStateToProps)(Detail);