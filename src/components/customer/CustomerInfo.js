import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss";
import axios from "axios";
class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 1 
        };
    }
 
    deleteCustomer() {
        var ten_kh = this.props.item.ten_kh;
        var config = {
            method: 'delete',
            url: 'http://chvbdq.herokuapp.com:80/khachhang/xoa/' + this.props.item.id,
            headers: { 
              'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            }
          };
          
          axios(config)
          .then(response => {
            alert("Khách hàng " + ten_kh + " đã được xóa thành công");
            window.location.reload(false);
          })
          .catch(error => {
            console.log(error);
          });
    }
    detailCustomer() {
        this.props.detailCustomer(this.props.item);
    }
    render() {
        return (
            <tr className="item-info">
                <td>{this.props.item.ten_kh}</td>
                <td>{this.props.item.gioi_tinh}</td>
                <td>{this.props.item.sdt}</td>
                <td><Button keyid="btn-delete" variant="danger" onClick={this.deleteCustomer.bind(this)}>Xóa</Button></td>
                <td><Button keyid="btn-detail" variant="info" onClick={this.detailCustomer.bind(this)}>Chi tiết</Button></td>
            
            </tr>
        );
    }
}


const mapStatetoProps = (state) => {
    return {
        customerCurrent: state.customer.customerCurrent,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        detailCustomer: (customer) => dispatch({ type: "CUSTOMER_CHANGE", customer: customer })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerInfo));
