import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Col, Row, FormLabel, Image, FormGroup, Form, FormControl } from 'react-bootstrap';

class AddEmployeePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avt: "https://via.placeholder.com/300",
            anh_dai_dien: "usedefault",
            ho_ten: "",
            cmnd: "",
            sdt: "",
            ngay_sinh: "",
            gioi_tinh: "",
            ten_tk: "",
            mat_khau: "",
            loai_tk: "0",
            luong: "",
            dia_chi: "",
        }
        this.onAvatarChange = this.onAvatarChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);

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
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form onSubmit={this.onSubmitHandle} method="POST" ref={(c) => this.form = c}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Thêm nhân viên mới
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
                                    <FormControl required type="date" value={this.state.ngay_sinh} name="ngay_sinh" onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup controlId="employee-sdt">
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl pattern="[0-9]{10}" required title="Số điện thoại hợp lệ phải có 10 số" value={this.state.sdt} name="sdt" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="employee-ten_tk">
                                    <FormLabel>Tên tài khoản</FormLabel>
                                    <FormControl required type="text" value={this.state.ten_tk} name="ten_tk" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="employee-mat_khau">
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <FormControl required type="password" value={this.state.mat_khau} name="mat_khau" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="employee-loai_tk">
                                    <FormLabel>Loại tài khoản</FormLabel>
                                    <select required className="form-control" value={this.state.loai_tk} name="loai_tk" onChange={this.handleChange} >
                                        <option value="">Chọn loại tài khoản</option>
                                        <option value="1">Nhân viên</option>
                                        <option value="2">Quản lý kho</option>
                                        <option value="3">Quản lý nhân sự</option>
                                        <option value="4">Giám đốc</option>
                                    </select>
                                </FormGroup>

                            </Col>

                            <Col sm={12} md={6}>
                                <FormGroup controlId="employee-cmnd">
                                    <FormLabel>CMND</FormLabel>
                                    <FormControl pattern="[0-9]{9,11}" required title="CMND phải từ 9 tới 11 kí số" value={this.state.cmnd} name="cmnd" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup >
                                    <Form.File type="file" type="file" accept="image/*" onChange={this.onAvatarChange} id="exampleFormControlFile1" label="Chọn ảnh đại diện" />
                                </FormGroup>
                                <Image fluid src={this.state.avt} alt="avt" style={{ border: "#ddd solid 1px" }} />
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
                        <Button variant="primary" type="submit" >Tạo</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Đóng</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

AddEmployeePopup.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

AddEmployeePopup.defaultProps = {
    onSubmit: () => { }
}

export default AddEmployeePopup;