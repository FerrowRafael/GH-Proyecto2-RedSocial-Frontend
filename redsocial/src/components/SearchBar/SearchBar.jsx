import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import { API_URL } from '../../api-config';
// import Suggestions from '../Sugerencias/Sugerencias'
import { Button, Input } from 'antd';
import { connect } from "react-redux";
import { ZoomInOutlined } from '@ant-design/icons';
//import store from "../../redux/store";
import { rdx_resultName } from "../../redux/actions/posts";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      // results: [],
      // value: 1,
        
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  // handleInputChange = ev => {
  //   console.log(ev.target.value)
  //   this.setState({ [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value });
  // }

  handleSubmit(event){
    event.preventDefault();
    let nombre = this.state.nombre
    console.log(this.state.nombre)
    rdx_resultName(nombre);
    this.props.history.push('/results/'+ nombre);
  }

  handleChange(event) {
    this.setState({nombre: event.target.value});
    console.log(event.target.value)
  }
  
  render() {
    
    return (
      <div class="navbar-center">
        {/* <div class="navbar-item">
            <div class="control">
              <Input prefix={<ZoomInOutlined />} $blue type="text" name="nombre"  
              placeholder="Buscar" 
              value={this.state.nombre} 
              onChange={this.handleInputChange}/>
            </div>
            <Button  type="primary" onClick={() => {this.search()}}>Buscar</Button>
        </div> */}

        <form onSubmit={this.handleSubmit} OnKeyUp={this.handleSubmit}>
          <label>
            <Input prefix={<ZoomInOutlined />} placeholder="Buscar" type="text" value={this.state.text} onChange={this.handleChange} />
          </label>
              {/* <input type="submit" value="Submit" /> */}
        </form>
        <div>{this.state.results}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { // ese state es de redux
	return ({postSearchResult: state.postSearchResult})
}

export default connect(mapStateToProps)(withRouter(Search));