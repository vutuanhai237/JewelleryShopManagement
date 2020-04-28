import React from "react";
import { Tab, Tabs, Row, Col, Form, Button, InputGroup, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./form.scss";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isThanhTien: true,
            isDuTien: false,
            TongTien: 0,
            TienThoi: 0,
        };
        this.setState(this.state);
        function myTimer() {

            this.setState({
                TongTien: this.getThanhTien(),
            });
        }

        var myVar = setInterval(myTimer.bind(this), 1000);
    }
    ThanhToan() {

        this.setState({
            isThanhTien: true
        });

    }
    ChinhSua() {
        this.setState({
            isThanhTien: true
        });
        this.props.disableItemList(false);
    }
    renderTooltip(props) {
        if (this.getThanhTien() == 0) {
            return (
                <Tooltip id="button-tooltip" {...props}>
                    Hãy nhập vài món hàng
                </Tooltip>
            );
        }
        else {
            return (
                <Tooltip id="button-tooltip" {...props}>
                    Tổng tiền là {this.getThanhTien()}
                </Tooltip>
            );
        }

    }
    changeKhachDua(evt) {
        const tienThoi = parseFloat(evt.target.value - this.state.TongTien);
        if (tienThoi < 0) {
            this.setState({
                TienThoi: "Chưa đủ tiền",
                isDuTien: false,
            });
        }
        else {
            if (this.state.TongTien != 0) {
                this.setState({
                    TienThoi: tienThoi,
                    isDuTien: true,
                });
            }

        }
    }
    getThanhTien() {
        const { itemTemptList } = this.props;
        var TemptTongTien = 0;
        for (var i = 0; i < itemTemptList.length; i++) {
            TemptTongTien += parseInt(itemTemptList[i].quantity) * parseFloat(itemTemptList[i].prices);
        };
        return TemptTongTien;
    }
    ThanhTien() {
        this.setState({
            isThanhTien: false,
            TongTien: this.getThanhTien(),
        });
        this.props.disableItemList(true);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Form className="pt-2 purchase-form">
                    <Tabs defaultActiveKey="purchase" id="uncontrolled-tab-example">
                        <Tab eventKey="purchase" title="Thanh toán">
                            <Row className="pt-3">
                                <Form.Label column lg="5" xs="5">
                                    VAT
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control className="text-right" plaintext readOnly defaultValue="10" />
                                </Col>
                                <InputGroup.Append column lg="2" xs="2">
                                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                </InputGroup.Append>
                            </Row>
                            <Row>
                                <Form.Label column lg="5" xs="5">
                                    Chiết khấu
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control className="text-right" plaintext readOnly defaultValue="10" />
                                </Col>
                                <InputGroup.Append column lg="2" xs="2">
                                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                </InputGroup.Append>
                            </Row>
                            <Row>
                                <Form.Label column lg="4" xs="4">
                                    Tổng tiền
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control className="text-right" readOnly value={this.state.TongTien} />
                                </Col>
                                <Col lg="2" xs="2">

                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Label column lg="4" xs="4">
                                    Tiền thối
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control className="text-right" readOnly value={this.state.TienThoi} />
                                </Col>
                                <Col lg="2" xs="2">
                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>

                            </Row>
                            <Row>
                                <Form.Label column lg="4" xs="4">
                                    Khách đưa
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control disabled={!this.state.isThanhTien} onChange={evt => this.changeKhachDua(evt)} className="text-right" type="text" placeholder="" />
                                </Col>
                                <Col lg="2" xs="2">
                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>
                            </Row>
                            <Row>
                                {(() => {
                                    if (this.state.isThanhTien) {

                                        return <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={this.renderTooltip.bind(this)}
                                        >
                                            <Button disabled={!this.state.isDuTien} variant="warning" onClick={this.ThanhTien.bind(this)} className="float-right btn-block">Thành tiền</Button>

                                        </OverlayTrigger>
                                    }
                                    else {
                                        return <ButtonGroup className="btn-block">
                                            <Button variant="warning" onClick={this.ChinhSua.bind(this)} className="">Chỉnh sửa</Button>
                                            <Button variant="success" onClick={this.ThanhToan.bind(this)} className="">Thanh toán</Button>

                                        </ButtonGroup>


                                    }
                                })()}



                            </Row>

                        </Tab>
                        <Tab eventKey="debt" title="Nợ">
                            <Row>
                                <Form.Label column lg="5" xs="5">
                                    Tổng tiền
                                </Form.Label>
                                <Col lg="4" xs="4">
                                    <Form.Control className="text-right" readOnly value={this.state.TongTien} />
                                </Col>
                                <Col lg="2" xs="2">

                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>
                            </Row>
                            <Row className="pt-3">
                                <Button variant="danger" className="float-right btn-block">Ghi nợ</Button>
                            </Row>
                        </Tab>
                    </Tabs>
                </Form>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        itemTemptList: state.employee.itemTemptList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

        disableItemList: (item) => dispatch({ type: "EMPLOYEEDISABLEITEMLIST", item: item})
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(PurchaseForm));

