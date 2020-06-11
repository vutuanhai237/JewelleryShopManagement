import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Col, Row, FormLabel, Image } from 'react-bootstrap';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import Form from 'react-validation/build/form';

import validator from 'validator';

const opt = [
    "aaaaaa",
    "bbbbbb",
    "cccccc",
]

const required = (value) => {
    if (validator.isEmpty(value)) {
        return <small className="form-text text-danger">Không được để trống</small>;
    }
}

const number = (value) => {
    if (!validator.isNumeric(value)) {
        return <small className="form-text text-danger">Giá trị phải là số</small>;
    }
}

class AddProductPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avt: "https://via.placeholder.com/300",
            ten_sp: "",
            loai_sp: "",
            gia_ban: "",
            gia_nhap: "",
            tieu_chuan: "",
            khoi_luong: "",
        }
        this.onAvatarChange = this.onAvatarChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onAvatarChange(event) {
        this.setState({
            avt: URL.createObjectURL(event.target.files[0]),
        })
    }

    onSubmitHandle(event) {
        console.log(this.state);
        event.preventDefault();
        this.form.validateAll();
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
                <Form onSubmit={this.onSubmitHandle} ref={(c) => this.form = c}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Thêm sản phẩm
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={12} md={8}>
                                <div className="form-group" controlId="product-name">
                                    <FormLabel>Tên sản phẩm</FormLabel>
                                    <Input className="form-control" type="text" value={this.state.ten_sp} name="ten_sp" onChange={this.handleChange} validations={[required]} />
                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={8}>
                                <div className="form-group" controlId="product-type">
                                    <FormLabel>Loại sản phẩm</FormLabel>
                                    <Select className="form-control" value={this.state.loai_sp} name="loai_sp" onChange={this.handleChange} validations={[required]}>
                                        <option value="">Chọn loại sản phẩm</option>
                                        {
                                            opt.map(item => {
                                                return <option key={item} value={item}>{item}</option>
                                            })
                                        }
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>
                                <div className="form-group" controlId="product-import-price">
                                    <FormLabel>Giá nhập</FormLabel>
                                    <Input className="form-control" type="text" value={this.state.gia_nhap} name="gia_nhap" onChange={this.handleChange} validations={[required, number]} />
                                </div>
                                <div className="form-group" controlId="product-weight">
                                    <FormLabel>Giá bán</FormLabel>
                                    <Input className="form-control" type="text" value={this.state.gia_ban} name="gia_ban" onChange={this.handleChange} validations={[required, number]} />
                                </div>
                                <div className="form-group" controlId="product-export-price">
                                    <FormLabel>Khối lượng</FormLabel>
                                    <Input className="form-control" type="text" value={this.state.khoi_luong} name="khoi_luong" onChange={this.handleChange} validations={[required, number]} />
                                </div>
                                <div className="form-group" controlId="product-standard">
                                    <FormLabel>Tiêu chuẩn</FormLabel>
                                    <Input className="form-control" type="text" value={this.state.tieu_chuan} name="tieu_chuan" onChange={this.handleChange} validations={[required]} />
                                </div>
                            </Col>

                            <Col sm={12} md={6}>
                                <div className="form-group" >
                                    <input type="file" name="anh_dai_dien" type="file" accept="image/*" onChange={this.onAvatarChange} id="exampleFormControlFile1" label="Chọn ảnh đại diện" />
                                </div>
                                <Image fluid src={this.state.avt} alt="avt" style={{ border: "#ddd solid 1px" }} />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Thêm</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default AddProductPopup;