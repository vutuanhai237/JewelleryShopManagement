import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Col, Row, FormLabel, Image, FormGroup, Form, FormControl } from 'react-bootstrap';
import { THE_LOAI_SAN_PHAM } from '../../constants';


class AddProductPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avt: "https://via.placeholder.com/300",
            anh_dai_dien: "usedefault",
            ten_sp: "",
            loai_sp: "",
            gia_ban: "",
            gia_nhap: "",
            tieu_chuan: "",
            khoi_luong: "",
            so_luong: "1",
            nhacc_id: "4eku6qskaxeee3w",
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
                            Thêm sản phẩm
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={12} md={8}>
                                <FormGroup controlId="product-name">
                                    <FormLabel>Tên sản phẩm</FormLabel>
                                    <FormControl required type="text" value={this.state.ten_sp} name="ten_sp" onChange={this.handleChange} />
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={8}>
                                <FormGroup controlId="product-type">
                                    <FormLabel>Loại sản phẩm</FormLabel>
                                    <select required className="form-control" value={this.state.loai_sp} name="loai_sp" onChange={this.handleChange} >
                                        <option value="">Chọn loại sản phẩm</option>
                                        {
                                            THE_LOAI_SAN_PHAM.map(item => {
                                                return <option key={item} value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>
                                <FormGroup controlId="product-import-price">
                                    <FormLabel>Giá nhập</FormLabel>
                                    <FormControl required type="number" value={this.state.gia_nhap} name="gia_nhap" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="product-export-price">
                                    <FormLabel>Giá bán</FormLabel>
                                    <FormControl required type="number" value={this.state.gia_ban} name="gia_ban" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="product-weight">
                                    <FormLabel>Khối lượng</FormLabel>
                                    <FormControl type="number" value={this.state.khoi_luong} name="khoi_luong" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="product-standard">
                                    <FormLabel>Tiêu chuẩn</FormLabel>
                                    <FormControl type="text" value={this.state.tieu_chuan} name="tieu_chuan" onChange={this.handleChange} />
                                </FormGroup>
                            </Col>

                            <Col sm={12} md={6}>
                                <FormGroup >
                                    <Form.File type="file" accept="image/*" onChange={this.onAvatarChange} id="exampleFormControlFile1" label="Chọn ảnh đại diện" />
                                </FormGroup>
                                <Image fluid src={this.state.avt} alt="avt" style={{ border: "#ddd solid 1px" }} />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" >Thêm</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

AddProductPopup.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

AddProductPopup.defaultProps = {
    onSubmit: () => {}
}

export default AddProductPopup;