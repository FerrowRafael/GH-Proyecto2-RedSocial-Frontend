import React, {Component} from 'react';
import './ModalUpdate.scss';
import { Modal, Button, Input, Select } from 'antd';
import { EditFilled } from '@ant-design/icons';

class ModalUpdate extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    const { TextArea } = Input;
    const { Option } = Select;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <EditFilled style={{ fontSize: '32px', borderStyle:0 }} />
        </Button>
        <Modal
          visible={visible}
          title="Editar este Pin"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="warning" loading={loading} onClick={this.eli}>
              Eliminar
            </Button>,
            <Button key="back" onClick={this.handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Guardar
            </Button>,
          ]}
        >
          <img style={{ width:"500px" }}src={this.props.post?.image_path}/>
           <input name="title" style={{marginTop:"35px",border: "none"}}class="input is-large" type="text" placeholder={this.props.post?.title}/>
          <TextArea style={{border: "none"}}name="text" placeholder="Explica en qué consiste tu Pin" />
          <Select defaultValue="5ead8df3174cc9ac477107dc" name="CategoryId" 
            value=''
            onChange=''
            style={{  height:35,width: 135}} >
          </Select>
        </Modal>
      </div>
    );
  }
}


export default ModalUpdate;


