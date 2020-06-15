import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { comentariosPost, comentar } from "../../redux/actions/comments";
import { Row, Col, Card, Button, notification,Input, Select, Modal } from 'antd';
import './Comments.scss'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // COMENTARIOS
    handleSubmit(event) {
        event.preventDefault();
        let text = this.state.text
        const post_id = this.props.postDetail.id
        console.log(text, post_id)
        comentar(post_id, {text});
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render(){
        
        return(
            /* COMENTARIOS */
            <Col style={{padding:'0px'}}class="navbar-item comments">
            <p><strong>Comentarios</strong></p>
            <div style={{width:'400px', height:'200px', overflow:'scroll'}}>
                {(this.props?.comments_post)?.map(com =>
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-48x48">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="Avatar" /> 
            
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
                        
                        <img src={this.props.user?.image_path} alt="Avatar" />
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
        )
    }
}
// export default Comments;
const mapStateToProps = (state) => ({
    comments_post: state.comments.comments_post,
    postDetail: state.posts.postDetail,
    user: state.users.user,
})
export default connect(mapStateToProps)(Comments);