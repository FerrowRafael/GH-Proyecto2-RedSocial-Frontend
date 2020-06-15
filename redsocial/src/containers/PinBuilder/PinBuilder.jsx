import React, { useState, useEffect } from 'react'
import { addPost } from '../../redux/actions/posts';
import { Input, notification, Modal, Button, Space, Select, Card, Row } from 'antd';
import axios from "axios";
// import { useParams, NavLink } from 'react-router-dom';
import './PinBuilder.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories"; 
import ImageUpload from '../../components/ImageUpload/ImageUpload';

const { Option } = Select;
const { TextArea } = Input;

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
        console.log("hello")
        event.preventDefault();
        setSrcImg(window.URL.createObjectURL(event.target.files[0]))
        console.log(srcImg)
        if (event.target.files.length > 0) {
        } else {
         this.setState({
           srcImg: null
         });
       }
    };
    
    // Darle a Guardar
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
            notification.success({ message: 'Pin creado con éxito' });
            this.props.history.push('/home/')
          })
          .catch((error) => {
            console.error(error)
          })
      }

    
        return(
            <Card className="tarjeta" justify style={{ display: 'flex', justifyContent: 'center',marginTop: '35px', width: '800px', height:"570px", marginLeft: "470px" }}>
                <div className="createProduct">
                    <form className="formProduct"action="" onSubmit={handleSubmit}>
                            <div>
                                <div className="categoryPin">
                                    <div style={{display:"flex", flexDirection:"row"}}>
                                        <Select defaultValue="Categorias" name="CategoryId" 
                                        value={categoryId}
                                        onChange={(value)=>setCategoryId(value)}
                                        style={{  height:35,width: 135}} >
                                        {(props.categories)?.map(category => <Option value={category?.id}> {category?.name}</Option>)}
                                        </Select>
                                        <input style={{ width: 80, backgroundColor:"red" }} className="inputButton" type="submit" value="Guardar" />
                                        
                                    </div>    
                                </div>
                            </div>
                            <div class="columns">
                                <div is-6 lass="column">
                                    <Card style={{ background:"#EFEFEF",height:"420px",width:"320px",borderRadius:"10px", marginTop:"10px",marginLeft:"30px" }}>
                                        <div className="main-content-to-download">
                                            <img style={{ height:"350px"}}className="imageUpload" alt="uploaded image" 
                                            src={srcImg || "https://i.vimeocdn.com/portrait/20982096_300x300"} />
                                        </div>
                                        <input onChange={onInputChange} type="file" name="imageProduct" id="file" class="input-file" />
                            
                                    </Card>
                                </div>
                                <div class="column">
                                    <input name="title" style={{marginTop:"35px",border: "none"}}class="input is-large" type="text" placeholder="Añade un título"/>
                                    <div style={{marginTop:"35px"}}>
                                        <p>{props.user.nickname}</p>
                                    </div>
                                    <TextArea style={{border: "none"}}name="text" placeholder="Explica en qué consiste tu Pin" />
                                </div>
                            </div> 
                        </form>
                    </div>
                </Card>
                    
    
        )
    

}

const mapStateToProps = (state) => ({ categories: state.categories.categories, user: state.users.user })
export default connect(mapStateToProps)(PinBuilder);