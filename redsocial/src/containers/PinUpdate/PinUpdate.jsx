import React, { Component } from 'react'


class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render(){
        return(
            <div>Hello</div>
        )
    }   
}

const mapStateToProps = (state) => ({ categories: state.categories, user: state.user })
export default connect(mapStateToProps)(Comments);