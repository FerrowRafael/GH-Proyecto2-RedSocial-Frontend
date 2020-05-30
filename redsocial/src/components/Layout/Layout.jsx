import React, { Component } from 'react';
import './Layout.scss';
import { Col, Row } from 'antd';

class Layout extends Component {
    render(){
        return(
            <Row gutter={[8, 8]}>
                <Col className="gutter-row" span={4}>
                    <img class="well" width="100%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>
            
                    <img  class="well"width="100%"  src="https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"/>
                    <img class="well" width="100%"  src="https://previews.123rf.com/images/nexusplexus/nexusplexus1307/nexusplexus130702343/21214032-imagen-de-%C3%A1tomos-y-electrones-de-color-concepto-f%C3%ADsica.jpg"/>
            
                    <img  class="well"width="100%" height="40%" src="https://www.socialnautas.es/wp-content/uploads/2019/01/Linkedin-1-e1548847344163.jpg"/>

                </Col>
            </Row>
        )
    }
}

export default Layout;
// const mapStateToProps = (state) => ({ products: state.products })
// export default connect(mapStateToProps)(ProductDetail);