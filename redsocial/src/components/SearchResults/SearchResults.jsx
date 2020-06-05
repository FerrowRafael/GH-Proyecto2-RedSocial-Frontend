import React, { Component, Fragment } from 'react'
import './SearchResults.scss';
import Post from '../../components/Post/Post';
// import Suggestions from '../Sugerencias/Sugerencias'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let search = this.props.match.params.name
    console.log(this.props.postSearchResult?.length)
    
    console.log(search, this.props.posts);
    return (
      <Fragment>
        <div className="result">
          <div className="posts">
            <h3>Busqueda: "{this.props.match.params.name}"</h3>
              <div class='container'>
                {this.props.posts?.filter(p => search ? p.title.toLowerCase().includes(search.toLowerCase()) : true)
                ?.map(post => 
                <Post key={post?._id} post={post} />)}
              </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => ({ posts: state.posts, postSearchResult: state.postSearchResult })
export default connect(mapStateToProps)(withRouter(SearchResults));