import React, { Component, Fragment } from 'react'
import './Detail.scss'
import Comments from '../../components/Comments/Comments';
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories";
import { postOne, updatePost, deletePost } from "../../redux/actions/posts"
import { comentariosPost } from "../../redux/actions/comments";
import { addLike, dislike, likesPost, AllLikes } from "../../redux/actions/likes";
import { LikeFilled, LikeOutlined, EditFilled } from '@ant-design/icons';
import { Row, Card, Button, notification, Input, Select, Modal, Spin, Space } from 'antd';
// import { useLocation, useParams } from 'react-router-dom'

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postactual: this.props.posts,
            liked: false,
            text: '',
            loading: false,
            visible: false,
            categoryID: '',
            cargando: true,

        };
        this.dalelike = this.dalelike.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const id =this.props.match.params.id
        postOne(id).finally(()=>this.setState({cargando: false}));
        // LIKES
        likesPost(id);
        let thisPost = this.props.posts;
        const checklike = (thisPost?.likes)?.map(like => (like.pivot));
        const likeUser = checklike?.map(likeUs => likeUs.user_id);
        (checklike ? this.setState({liked: true}) : this.setState({liked: false}));

        let userId= this.props.user?.id
        for (let i = 0; i < likeUser?.length; i++) {
            if (userId == likeUser[i]) {
                this.togglelikestate()
                console.log("Ya le has dado LIKE")
            } else{
                console.log("like y subscribete")  
                let post_id= this.props.match.params.id;
                this.togglelikestate()
            }  
        }    
        categoriesAll();
        comentariosPost(id);
    }
 
    // LIKES
    dalelike() {
        const post_id = this.props.match.params.id;
        this.togglelikestate()
        addLike(post_id);
    }

    daledislike() {
        this.togglelikestate()
        let post_id= this.props.match.params.id;
        dislike(post_id); 
    }
    
    togglelikestate(){
        console.log("togle funciona")
        this.setState({
            liked: !this.state.liked
        });
        AllLikes();
        console.log(this.state.liked)
    }
    /* fin LIKES */

    // MODAL
    showModal = () => {
        this.setState({
          visible: true,
        });
    };

      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    delete = () => {
        console.log("ME dijo que borrara cosas")
        let userId= this.props.user.id
        // let userPost = this.state.postactual.user_id;
        const post_id = this.props.match.params.id;
        deletePost(post_id)
        console.log(post_id, userId);
        if(userId !== userId){
            notification.success({ message: 'Imposible eliminar pin' })
            this.props.history.push('/home')
        }

        else{
            notification.success({ message: 'Pin eliminado satisfactoriamente' })
        }  
      }

      useEffect = () => {
        var img = document.querySelector('.main-content-to-download img');
        img.style.height = img.parentNode.getBoundingClientRect().width + "px";
        categoriesAll();
        }
    /* Fin Modal */

    // UPDATE POST
    handleSubmit(event) {
        event.preventDefault();
        console.log("editando que es...")
        let post_id = this.props.match.params.id;
        const post= {
            title: event.target.title.value,
            text: event.target.text.value
        }
        updatePost(post,post_id)
        // this.props.history.push('/home')
    }

    render() {

        if(this.state.cargando){
            return (
                <Space style={{display:"flex", justifyContent:"center", marginTop:"200px"}} size="large">
                    <Spin size="large" />
                </Space>
              
            );
            
            }
        
        
            // console.log(this.props.user.id, this.props.posts.user_id)
            const imagen = 'http://localhost:8000/images/posts/' + this.props.posts.image_path;
            // Botones like
            const label = !this.state.liked ? <button className="btn" onClick={()=>this.daledislike()}>
            <LikeFilled /></button> : <button className="btn" onClick={()=>this.dalelike()}>
            <LikeOutlined /></button>
            const { visible, loading } = this.state;
            const { TextArea } = Input;
            const { Option } = Select;
            return (
            <Fragment >
            {/* MODAL */}
            <div>
                <Modal style={{width:"500px", borderRadius:"15px" }}
                visible={visible}
                title="Editar este Pin"
                // onOk={this.handleOk}
                onCancel={this.handleCancel}>
                    <form className="columns" onSubmit={this.handleSubmit}>
                        <div className="column is-two-thirds">
                            <Row className="rowUpdate"style={{marginTop:"15px"}}>
                                <p >Titulo</p>
                                <input name="title" style={{width:"400px",borderRadius:"15px"}} class="input" type="text" placeholder="Titulo"/>
                            </Row>
                            <hr style={{borderTop: "1px solid #ddd"}}/>
                            <Row className="rowUpdate" style={{marginTop:"15px"}}>
                                <p>Descripción</p>
                                <TextArea style={{width:"400px",borderRadius:"15px"}} name="text" placeholder="Explica en qué consiste tu Pin" />
                            </Row>
                        </div>
                        <div className="column">
                            <img style={{ maxWidth:"230px", marginTop:"15px" }} src={imagen}/>
                        </div>
                        <Row className="footerModal">
                            <Button className="ButtonModal" key="submit" type="warning" loading={loading} onClick={this.delete}>
                                Eliminar
                            </Button>
                            <div style={{display:"flex", justifyContent:"spaceBetween"}}>
                                <Button className="ButtonModal" key="back" onClick={this.handleCancel}>
                                    Cancelar
                                </Button>
                                <input style={{ width: 80, backgroundColor:"red", color:"white", borderRadius:"25px", marginLeft:"15px" }} className="inputButton" type="submit" value="Guardar" />
                            </div>
                        </Row>
                    </form>
                </Modal>
            </div>
            {/* Fin Modal */}

            <Card className="tarjeta" justify style={{ width: 930, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'  }}>
                <Row class="columns">
                    <div class="column is-half" span={12}>
                        <img class="imgDetail" width="100%" src={imagen} alt=""/>
                    </div>

                    <div class="column is-half" span={12}>
                        <div>
                            <p>{this.props.posts?.category?.name}</p>
                            {this.props.posts?.user?.id === this.props?.user?.id ? 
                            <Button onClick={this.showModal} style={{ borderColor:"white" }}>
                            <EditFilled style={{ fontSize: '32px' }}/>
                            </Button> : <div></div>}
                            
                        </div>

                        <h3>{this.props.posts.title}</h3>
                        <p style={{ fontSize:'14px'  }}>{this.props.posts.text}</p>
                        <Row>
                            <p>Likes <a>{this.props.posts.likes?.length}</a> </p>
                        </Row>

                        <Row style={{justifyContent:"space-around"}}>
                            <img width="40px" src={this.props.user?.image_path} alt=""/>
                            <p>{this.state.postactual?.user?.nickname}</p>
                            <Button>Seguir</Button>
                            <div></div>
                        </Row>
                            <Comments/>
                            <div className="customContainer">
                                {label}
                            </div>
                        </div>

                    </Row>
                </Card>
            </Fragment>
)
        
            
  
              
    }  
}
       
    
    


const mapStateToProps = (state) => ({
    posts: state.posts.postDetail,
    categories: state.categories,
    user: state.users.user,
    comments_post: state.comments.comments_post  ,
    likes_post: state.likes.likes_post
})
export default connect(mapStateToProps)(Detail);