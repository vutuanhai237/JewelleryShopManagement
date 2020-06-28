import React from "react";
import { Image, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Moment from 'react-moment';
import { getEmployeeAvatar } from '../../services/employeeApi';

class EmployeeDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anh_dai_dien: null
        }
    }

    UNSAFE_componentWillReceiveProps() {
        if (this.props.item)
            getEmployeeAvatar(this.props.item.tk_id).then(
                res => {
                    this.setState({
                        anh_dai_dien: res.data.anh_dai_dien,
                    })
                }
            )
    }

    render() {

        if (!this.props.item)
            return null;
        const {
            id,
            ho_ten,
            ngay_sinh,
            luong,
            cmnd,
            gioi_tinh,
            sdt,
            dia_chi,
            ghi_chu,
        } = this.props.item;

        const { anh_dai_dien } = this.state;


        return (
            <div>
                <div className="pt-2 customer-form" style={{ maxHeight: "unset" }}>
                    <h5 className="font-weight-bold mt-2">Thông tin nhân viên</h5>
                    {anh_dai_dien && <Image fluid src={anh_dai_dien} alt="image" className="my-4" />}
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="px-0">
                            Họ tên:<br />
                            <span className="font-weight-bold">{ho_ten}</span>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                            Giới tính: {" "}
                            <span className="font-weight-bold">{gioi_tinh}</span>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                            Ngày sinh: {" "}
                            <span className="font-weight-bold">
                                <Moment format="DD/MM/YYYY">
                                    {ngay_sinh}
                                </Moment>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                            CMND: {" "}
                            <span className="font-weight-bold">{cmnd}</span>
                        </ListGroupItem>
                        {/* <ListGroupItem className="px-0">
                            Lương: {" "}
                            <span className="font-weight-bold">{luong}{" VND"}</span>
                        </ListGroupItem> */}
                        <ListGroupItem className="px-0">
                            Số điện thoại: {" "}
                            <span className="font-weight-bold">{sdt}</span>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                            Địa chỉ: {" "}
                            <span className="font-weight-bold">{dia_chi}</span>
                        </ListGroupItem>
                    </ListGroup>
                    <div className="text-center w-100 py-4">
                        <Button onClick={this.props.onEdit}>Sửa thông tin</Button>
                    </div>

                </div>
            </div >
        );
    }



}

export default EmployeeDetail;