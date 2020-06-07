import React, { Component } from 'react'
import { addPost } from '../../redux/actions/posts';
import { Input, notification, Modal, Button, Space, Select, Card, Row } from 'antd';
import { postsAll, updatePost } from "../../redux/actions/posts"
import './PinUpdate.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories"; 

const { Option } = Select;
const { TextArea } = Input;

class PinUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let post_id = this.props.match.params.id;
        const post= {
            title: event.target.title.value,
            text: event.target.text.value
        }
        updatePost(post,post_id)
    }

    render(){
        console.log()
        const imagen = 'http://localhost:8000/images/posts/' + this.state.postactual?.image_path;
        const { visible, loading } = this.state;
        const { TextArea } = Input;
        const { Option } = Select;


        return(
            // MODAL
            <div>
                <Modal style={{width:"500px", borderRadius:"15px" }}
                visible={visible}
                title="Editar este Pin"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="submit" type="warning" loading={loading} onClick={this.deletePost}>
                    Eliminar
                    </Button>,
                    // <Button key="back" onClick={this.handleCancel}>
                    // Cancelar
                    // </Button>,
                    // <input style={{ width: 80, backgroundColor:"red" }} className="inputButton" type="submit" value="Guardar" />
                    ]}
                    >
                    <form className="columns" onSubmit={this.handleSubmit}>
                        <div className="column is-two-thirds">
                            <Row className="rowUpdate"style={{marginTop:"15px"}}>
                                <p >Titulo</p>
                                <input name="title" style={{width:"400px",borderRadius:"15px"}} class="input" type="text" placeholder="Titulo"/>
                            </Row>
                            <Row className="rowUpdate" style={{marginTop:"15px"}}>
                                <p>Descripción</p>
                                <TextArea style={{width:"400px",borderRadius:"15px"}} name="text" placeholder="Explica en qué consiste tu Pin" />
                            </Row>
                            {/* <Row  className="rowUpdate" style={{marginTop:"15px"}}>
                                <div className="categoryPin">
                                    <div style={{display:"flex", flexDirection:"row"}}>
                                        <Select defaultValue="Categoria" name="CategoryId"
                                        value={this.state.categoryId}
                                        onChange={(value)=>this.state.CategoryId(value)}
                                        style={{  height:35,width: 135}} >
                                            {(this.props.categories)?.map(category => <Option value={category?.id}> {category?.name}</Option>)}
                                        </Select>
                                    </div>
                                </div>
                            </Row> */}
                        </div>
                        <div className="column">
                            <img style={{ maxWidth:"230px" }} src={imagen}/>
                        </div>
                        <input style={{ width: 80, backgroundColor:"red" }} className="inputButton" type="submit" value="Guardar" />
                    </form>
                </Modal>
            </div>
            // Fin de MODAL
    
        )
    
    }   
}

const mapStateToProps = (state) => ({ categories: state.categories, user: state.user })
export default connect(mapStateToProps)(PinUpdate);