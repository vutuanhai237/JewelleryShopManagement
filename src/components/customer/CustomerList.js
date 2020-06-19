import React, { Component } from 'react';
import { Row, Table, Modal, Button } from 'react-bootstrap';
import CustomerInfo from "./CustomerInfo"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"

class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            deleteCMND: ""
        };
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
    setDetailCustomer(cmnd) {
        this.props.setDetailCustomer(cmnd);
    }
    render() {
        const { customerList } = this.props;
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
                                    return <CustomerInfo detailAction={() => this.setDetailCustomer(item.cmnd)} deleteAction={() => this.deleteCustomer(item.cmnd)} item={item} />
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
        customerList: state.customer.customerList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCustomer: (cmnd) => dispatch({ type: "CUSTOMER_DELETE", cmnd: cmnd }),
        setDetailCustomer: (cmnd) => dispatch({ type: "CUSTOMER_CHANGE", cmnd: cmnd })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerList));
