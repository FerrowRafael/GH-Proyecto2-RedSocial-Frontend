import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
class ImageUpload extends Component {
    constructor(props) {
     super(props);
     this.state = { term: "", color: "#E88684", srcImg: null };
   }
 
   // INPUT TYPE FILE
   onInputChange = event => {
     event.preventDefault();
     this.setState({
       srcImg: window.URL.createObjectURL(event.target.files[0])
     });
     if (event.target.files.length > 0) {
     } else {
       this.setState({
         srcImg: null
       });
     }
   };
 // DOWNLOAD
 onDownload = event => {
   event.preventDefault();
   var node = document.querySelector('.main-content-to-download');
 
     domtoimage.toPng(node).then(function (dataUrl) {
         var img = new Image();
         img.src = dataUrl;
         document.body.appendChild(img);
     }).catch(function (error) {
         console.error('oops, something went wrong!', error);
     });
 
 }
   componentDidMount(){
     var img = document.querySelector('.main-content-to-download img');
     img.style.height = img.parentNode.getBoundingClientRect().width + "px";
   }
   /////////////////////////////////////// 
   
   render() {
   let {srcImg} = this.state;
     return (
       <div className="previewComponent">
         <input
                 id="import-file"
                 type="file"
                 value={this.state.term}
                 onChange={this.onInputChange}
                 accept="image/jpg, image/png, image/jpeg"
               />
         <div className="main-content-to-download">
             <img alt="uploaded image" src={srcImg || "https://i.vimeocdn.com/portrait/20982096_300x300"} />
          </div>
         {/* <input
                 id="submit"
                 type="submit"
                 value="Télécharger"
                 onClick={this.onDownload}
               /> */}
       </div>
     )
   }
 }
   
 export default ImageUpload;