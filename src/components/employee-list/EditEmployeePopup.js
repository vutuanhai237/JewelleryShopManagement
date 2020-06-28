import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Col, Row, FormLabel, Image, FormGroup, Form, FormControl } from 'react-bootstrap';
import moment from 'moment';

const opt = [
    "aaaaaa",
    "bbbbbb",
    "cccccc",
]

class EditEmployeePopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avt: null,
            anh_dai_dien: null,
            ho_ten: "",
            cmnd: "",
            sdt: "",
            ngay_sinh: "",
            gioi_tinh: "",
            //luong: "",
            dia_chi: "",
        }
        this.onAvatarChange = this.onAvatarChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);

    }

    UNSAFE_componentWillReceiveProps() {
        if (this.props.item)
            this.setState({
                avt: this.props.item.anh_dai_dien,
                anh_dai_dien: null,
                ho_ten: this.props.item.ho_ten,
                cmnd: this.props.item.cmnd,
                sdt: this.props.item.sdt,
                ngay_sinh: this.props.item.ngay_sinh,
                gioi_tinh: this.props.item.gioi_tinh,
                //luong: this.props.item.luong,
                dia_chi: this.props.item.dia_chi,
            })
    }

    onAvatarChange(event) {
        this.setState({
            anh_dai_dien: event.target.files[0],
            avt: URL.createObjectURL(event.target.files[0]),
        })
    }

    onSubmitHandle(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.props.onHide();
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });

    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.props.onHide()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form onSubmit={this.onSubmitHandle} method="POST" ref={(c) => this.form = c}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sửa thông tin nhân viên
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={12} md={6}>
                                <FormGroup controlId="employee-ho_ten">
                                    <FormLabel>Họ tên</FormLabel>
                                    <FormControl required type="text" value={this.state.ho_ten} name="ho_ten" onChange={this.handleChange} />
                                </FormGroup>

                            </Col>
                            <Col sm={12} md={6}>
                                <FormGroup controlId="employee-gioi_tinh">
                                    <FormLabel>Giới tính</FormLabel>
                                    <select required className="form-control" value={this.state.gioi_tinh} name="gioi_tinh" onChange={this.handleChange} >
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>

                                <FormGroup controlId="employee-ngay_sinh">
                                    <FormLabel>Ngày sinh</FormLabel>
                                    <FormControl required type="date" value={moment(this.state.ngay_sinh).format("YYYY-MM-DD")} name="ngay_sinh" onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup controlId="employee-sdt">
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl pattern="[0-9]{10}" required title="Số điện thoại hợp lệ phải có 10 số" value={this.state.sdt} name="sdt" onChange={this.handleChange} />
                                </FormGroup>


                            </Col>

                            <Col sm={12} md={6}>
                                <FormGroup controlId="employee-cmnd">
                                    <FormLabel>CMND</FormLabel>
                                    <FormControl pattern="[0-9]{9,11}" required title="CMND phải từ 9 tới 11 kí số" value={this.state.cmnd} name="cmnd" onChange={this.handleChange} />
                                </FormGroup>
                                {/* <FormGroup >
                                    <Form.File type="file" type="file" accept="image/*" onChange={this.onAvatarChange} id="exampleFormControlFile1" label="Chọn ảnh đại diện" />
                                </FormGroup>
                                <Image fluid src={this.state.avt} alt="avt" style={{ border: "#ddd solid 1px" }} /> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                                <FormGroup controlId="employee-dia_chi">
                                    <FormLabel>Địa chỉ</FormLabel>
                                    <FormControl type="text" value={this.state.dia_chi} name="dia_chi" onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" >Lưu lại</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Đóng</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

EditEmployeePopup.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

EditEmployeePopup.defaultProps = {
    onSubmit: () => { }
}

export default EditEmployeePopup;