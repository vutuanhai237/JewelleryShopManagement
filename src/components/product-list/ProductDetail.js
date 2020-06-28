import React from "react";
import { Form, Image, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import EditProductPopup from "./EditProductPopup";

const ProductDetail = (props) => {
    if (!props.item)
        return null;
    const {
        idsp,
        ten_sp,
        loai_sp,
        so_luong,
        gia_ban,
        gia_nhap,
        anh_dai_dien,
        khoi_luong,
        tieu_chuan,
        ghi_chu,
        nhacc_id
    } = props.item;
    return (
        <div>
            <div className="pt-2 customer-form" style={{ maxHeight: "unset" }}>
                <h5 className="font-weight-bold mt-2">Chi tiết sản phẩm</h5>
                <Image fluid src={anh_dai_dien} alt="image" className="my-4" />
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="px-0">
                        Tên sản phẩm:<br />
                        <span className="font-weight-bold">{ten_sp}</span>
                    </ListGroupItem>
                    <ListGroupItem className="px-0">
                        Loại sản phẩm: {" "}
                        <span className="font-weight-bold">{loai_sp}</span>
                    </ListGroupItem>
                    <ListGroupItem className="px-0">
                        Số lượng: {" "}
                        <span className="font-weight-bold">{so_luong}</span>
                    </ListGroupItem>
                    <ListGroupItem className="px-0">
                        Giá bán: {" "}
                        <span className="font-weight-bold">{gia_ban}{" VND"}</span>
                    </ListGroupItem>
                    <ListGroupItem className="px-0">
                        Giá nhập: {" "}
                        <span className="font-weight-bold">{gia_nhap}{" VND"}</span>
                    </ListGroupItem>
                    <ListGroupItem className="px-0">
                        Tiêu chuẩn: {" "}
                        <span className="font-weight-bold">{tieu_chuan}</span>
                    </ListGroupItem>
                    <ListGroupItem className="px-0">
                        Khối lượng: {" "}
                        <span className="font-weight-bold">{khoi_luong}</span>
                    </ListGroupItem>
                </ListGroup>
                <div className="text-center w-100 py-3">
                    <Button onClick={props.onEdit}>Sửa sản phẩm</Button>
                </div>

            </div>
        </div >
    );
}

export default ProductDetail;