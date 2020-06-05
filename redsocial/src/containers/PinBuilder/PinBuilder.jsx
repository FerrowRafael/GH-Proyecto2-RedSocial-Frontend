import React, { useState, useEffect } from 'react'
import { addPost, deleteProduct, editProduct } from '../../redux/actions/posts';
import { Input, notification, Modal, Button, Space, Select, Card, Row } from 'antd';
import axios from "axios";
// import { useParams, NavLink } from 'react-router-dom';
import './PinBuilder.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories"; 
import ImageUpload from '../../components/ImageUpload/ImageUpload';

// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };
const { Option } = Select;

const PinBuilder = (props) => {
    // const [modal, contextHolder] = Modal.useModal();
    const [categoryId, setCategoryId] = useState("")
    const [term, setTerm] = useState("")
    const [color, setColor] = "#E88684"
    const [srcImg, setSrcImg] = useState(null)
       
    useEffect(() => {
        var img = document.querySelector('.main-content-to-download img');
        img.style.height = img.parentNode.getBoundingClientRect().width + "px";
        categoriesAll();
        
    }, [])

    //Previsualizacion imagen
    const onInputChange = event => {
        event.preventDefault();
        setSrcImg: window.URL.createObjectURL(event.target.files[0])
        
        if (event.target.files.length > 0) {
        } else {
         this.setState({
           srcImg: null
         });
       }
    };
    
    const handleSubmit = event => {
        console.log("hola");
        event.preventDefault();
        const formData = new FormData();
        if (event.target.imageProduct.files[0]) formData.set('image_path', event.target.imageProduct.files[0]);
        formData.set('title', event.target.title.value)
        formData.set('text', event.target.text.value)
        formData.set('category_id', categoryId)
        
        addPost(formData)
            
          .then(res => {
            notification.success({ message: 'Product successfully uploaded ' })
          })
          .catch((error) => {
            console.error(error)
          })
      }

    
        return(
                <Card className="tarjeta" justify style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '35px', width: '800px', height:"570px", marginLeft: "470px" }}>
                    <div className="createProduct">
                        
                        <form className="formProduct"action="" onSubmit={handleSubmit}>
                            <input
                                id="import-file"
                                type="file"
                                value={setTerm}
                                onChange={onInputChange}
                                accept="image/jpg, image/png, image/jpeg"
                            />
                            <div className="main-content-to-download">
                                <img alt="uploaded image" src={srcImg || "https://i.vimeocdn.com/portrait/20982096_300x300"} />
                            </div>
                            <input type="file" name="imageProduct" id="file" class="input-file" />
                            {/* <label for="file" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Choose a file</span>
                            </label> */}
                            <p>  Seleccionar  
                            <Select defaultValue="5ead8df3174cc9ac477107dc" name="CategoryId" 
                            value={categoryId}
                            onChange={(value)=>setCategoryId(value)}
                            style={{ width: 120 }} >
                                {(props.categories)?.map(category => <Option value={category?.id}> {category?.name}</Option>)}
                            </Select>
                            </p>
                            <Button type="primary" >
                                <input className="input" type="submit" value="Create product" />
                            </Button>
                            <Input name="title" placeholder="Añade un título" />
                            <Input name="text" placeholder="Explica en qué consiste tu Pin" />
                        </form>
                    </div>
                    {/* <form className="form-horizontal" enctype="multipart/form-data">
                        <fieldset>
                            <div class="columns">
                                <div>
                                    <div></div>
                                    <Card  style={{ height: "450px", width:"320px", backgroundColor:"#EFEFEF"}}class="file column">
                                        <ImageUpload/>
                                    </Card>
                                </div>
                                <div class="column">
                                    <div style={{display: "flex", justifyContent:"flex-end"}}class="field">
                                        <Row>
                                            <div class="navbar-item has-dropdown is-hoverable">
                                                <a class="navbar-link ">
                                                    Seleccionar
                                                </a>
                                                <div class="navbar-dropdown">
                                                    {(this.props.categories)?.map(category => <a class="navbar-item"> {category?.name}</a>)}
                                                </div>
                                            </div>
                                            <button width="100px" htmlType="submit" className="guardar-form-button">
                                            <strong>Guardar</strong>
                                            </button>
                                        </Row>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input id="title" name="title" type="text" placeholder="Añade un título" class="input is-large"/>
                                        </div>
                                    </div> 
                                    <Row>
                                        <img width="40px" src={this.props.user?.image_path} alt=""/>
                                        <p>{this.props.user.nickname}</p>
                                    </Row>

                                    <div class="field">
                                        <div class="control">
                                            <input id="text" name="text" type="text" placeholder="Explica en que consiste tu pin" class="input"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form> */}
                </Card>
                    
    
        )
    

}

const mapStateToProps = (state) => ({ categories: state.categories, user: state.user })
export default connect(mapStateToProps)(PinBuilder);