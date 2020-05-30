import React, { useEffect } from 'react';
// import './Home.scss'
import { connect } from "react-redux";
import { Col, Row } from 'antd';
import { postsAll } from '../../redux/actions/posts';
import Post from '../../components/Post/Post';


const Home = (props) => {

    useEffect(() => {
        postsAll()
        console.log(props.posts)
    }, [])


    return (
        <Row gutter={[8, 60]}>
            <Col className="gutter-row" span={4}>
                <div className="posts">
                    {(props.posts)?.map(post => <Post key={post._id} post={post}/>)}
                </div>
            </Col>
        </Row>
//             <Row gutter={[8, 8]}>
//       <Col className="gutter-row" span={4}>
        
//       <img class="well" width="100%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%"  src="https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"/>
//   <img class="well" width="100%"  src="https://previews.123rf.com/images/nexusplexus/nexusplexus1307/nexusplexus130702343/21214032-imagen-de-%C3%A1tomos-y-electrones-de-color-concepto-f%C3%ADsica.jpg"/>

//   <img  class="well"width="100%" height="40%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

        
//       </Col>
//       <Col className="gutter-row" span={4}>
        
//       <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>
//   <img class="well" width="100%" height="50%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

        
//       </Col>
//       <Col className="gutter-row" span={4}>
        
//       <img class="well" width="100%" height="10%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="20%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>
//   <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

        
//       </Col>
//       <Col className="gutter-row" span={4}>
        
//       <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>
//   <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

        
//       </Col>
//       <Col className="gutter-row" span={4}>
        
//       <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="70%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>
//   <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="20%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

        
//       </Col>
//       <Col className="gutter-row" span={4}>
        
//       <img class="well" width="100%" height="40%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="60%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>
//   <img class="well" width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//   <img  class="well"width="100%" height="80%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

//       </Col>
 
//     </Row>
        )
           
        
    
}

// export default Home;

const mapStateToProps = (state) => ({ posts:state.posts })
export default connect(mapStateToProps)(Home);