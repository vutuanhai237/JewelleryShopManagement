import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"
class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 1 
        };
    }
 
    deleteCustomer() {
        this.props.deleteAction();
    }
    setDetailCustomer() {
        this.props.detailAction();
    }
    render() {
        return (
            <tr className="item-info">
                <td>{this.props.item.ten_kh}</td>
                <td>{this.props.item.gioi_tinh}</td>
                <td>{this.props.item.sdt}</td>
                <td><Button keyid="btn-delete" variant="danger" onClick={this.deleteCustomer.bind(this)}>Xóa</Button></td>
                <td><Button keyid="btn-detail" variant="info" onClick={this.setDetailCustomer.bind(this)}>Chi tiết</Button></td>
            
            </tr>
        );
    }
}


const mapStatetoProps = (state) => {
    return {
      
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerInfo));
