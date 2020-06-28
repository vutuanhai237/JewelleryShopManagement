import React, { Component } from 'react';
import { Row, Table, Modal, Button } from 'react-bootstrap';
import CustomerInfo from "./CustomerInfo"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"
import axios from 'axios'
import { HOST, PORT } from '../../constants';
class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            deleteCMND: "",
            customerList: [],
        };
    }

    componentDidMount() {
        this.fetchAllCustomer();
       
    }

    fetchAllCustomer() {       
        var config = {
            method: 'get',
            url: `https://${HOST}:${PORT}/khachhang/search?ten_kh=&cmnd=&from=0&count=10`,
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            }
        };
        axios(config)
            .then(response => {
                this.setState({
                    customerList: JSON.parse(JSON.stringify(response.data)).ds_khachhang,
                })
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    alert("Bạn không có quyền truy cập trang này!");
                    window.location.href = "/";
                    return;
                }
                console.log(error);
            });

    }



    handleOK() {
        this.setState({
            modalShow: false,
        });

        this.props.deleteCustomer(this.state.deleteCMND);
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }
    deleteCustomer(cmnd) {
        this.setState({
            modalShow: true,
            deleteCMND: cmnd,
        });
        this.forceUpdate();
    }
    setDetailCustomer(id) {
        this.props.setDetailCustomer(id);
        this.forceUpdate();
    }
    render() {
        const {customerList} = this.state;
        return (
            <div className="customer-info-list">
                <Modal
                    centered
                    show={this.state.modalShow}
                    onHide={this.handleClose.bind(this)}
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title contained-modal-title-vcenter>Thông báo</Modal.Title>
                    </Modal.Header>
                    {(() => {
                        return <div>
                            <Modal.Body>Bạn chắc chắn xóa không?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={this.handleOK.bind(this)}>
                                    Đồng ý
                                </Button>
                                <Button variant="danger" onClick={this.handleClose.bind(this)}>
                                    Thoát
                                </Button>
                            </Modal.Footer>
                        </div>

                    })()}

                </Modal>

                <Row>
                    <Table responsive unbordered>
                        <thead>
                            <tr>
                                <th>Tên khách hàng</th>
                                <th>Giới tính</th>
                                <th>Số điện thoại</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerList.map(item => {
                                    return <CustomerInfo key={item.id} detailAction={() => this.setDetailCustomer()} deleteAction={() => this.deleteCustomer()} item={item} />
                                })
                            }
                        </tbody>
                    </Table>
                </Row>



            </div>
        );


    }
}

const mapStatetoProps = (state) => {
    return {
        //customerList: state.customer.customerList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCustomer: () => dispatch({ type: "CUSTOMER_GET_ALL"}),
        deleteCustomer: (id) => dispatch({ type: "CUSTOMER_DELETE", id: id }),
        
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerList));
