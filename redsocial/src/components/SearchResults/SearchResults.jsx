import React, { Component, Fragment } from 'react'
import './SearchResults.scss';
import { Radio } from 'antd';
import Post from '../../components/Post/Post';
import axios from "axios";
import { API_URL } from '../../api-config';
// import Suggestions from '../Sugerencias/Sugerencias'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postsAll } from '../../redux/actions/posts';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
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
            {this.props.posts
            ?.filter(p => search ? p.title.toLowerCase().includes(search.toLowerCase()) : true)
              ?.map(post => {
                console.log(post);
                return <div>{!post ?
                  <div>Error</div> : <Post key={post?._id} post={post} />}
                </div>
       
              })
            }
            
            

          </div>
        </div>
        

        {/* // <Suggestions results={this.state.results} /> */}
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => ({ posts: state.posts, postSearchResult: state.postSearchResult })
export default connect(mapStateToProps)(withRouter(SearchResults));