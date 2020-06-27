import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./form.scss"

class DeliveryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: "", isLayLien: false};
    }
    KhachLayLien() {
        let today = new Date();
        let current_day = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        this.setState({ 
            date: current_day, 
            isLayLien: true 
        });
    }
    KhachGiaoNhan() {
        this.setState({
            date: "", 
            isLayLien: false 
        });
    }
    render() {

        return (
            <div>
                <Form className="delivery-form">
                    <h5>Giao nhận</h5>
                    {/* // */}
                    <Form.Group className="pt-2" as={Row} bsStyle="success">
                        <Form.Label column sm="3" >Ngày nhận</Form.Label>
                        <Col column="true" sm="9">
                            <Form.Control disabled={this.state.isLayLien} id="date-time" type="date" ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="" as={Row}>
                        <Form.Label column sm="3" >Ngày giao</Form.Label>
                        <Col column sm="9">
                            {/* <DateTime className="date-time" pickerOptions={{ format: "LL" }} value="2017-04-20" /> */}
                            <Form.Control disabled={this.state.isLayLien} type="date"></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3" >Địa chỉ nhận</Form.Label>
                        <Col column sm="9">
                            <Form.Control disabled={this.state.isLayLien}  as="select" custom>
                                <option>Địa chỉ quận 7</option>
                                <option>Địa chỉ quận 5</option>
                                <option>Địa chỉ quận 7</option>
                                <option>Địa chỉ quận 7</option>
                                <option>Địa chỉ quận 7</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group className="" as={Row}>
                        <Form.Label column sm="3" >Địa chỉ giao</Form.Label>
                        <Col column sm="9">
                            <Form.Control disabled={this.state.isLayLien} placeholder="Ví dụ: Chi nhánh quận 7" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            {(() => {
                                if (this.state.isLayLien) {

                                    return <Button variant="success" onClick={this.KhachGiaoNhan.bind(this)} className="float-right">Khách giao nhận</Button>

                                }
                                else {
                                    return <Button variant="warning" onClick={this.KhachLayLien.bind(this)} className="float-right">Khách lấy liền</Button>

                                }
                            })()}
                        </Col>
                    </Form.Group>
                </Form>
            </div>

        );
    }
}


export default DeliveryForm;