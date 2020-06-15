import React from 'react';
import { Table } from 'react-bootstrap';
import EmployeeListItem from './EmployeeListItem';
import PropTypes from 'prop-types';

const EmployeeList = (props) => {
    const { data, handleDelete, onSelectItem } = props;
    return (
        <div className="item-info-list">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Số điện thoại</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return <EmployeeListItem
                                key={item.id}
                                handleDelete={() => handleDelete(item)}
                                item={item}
                                onSelectItem={() => onSelectItem(item)}
                            />
                        })
                    }
                </tbody>
            </Table>
            {
                data.length < 1 &&
                <p className="text-center">Không tìm thấy nhân viên</p>
            }
        </div >
    );
}

EmployeeList.defaultProps = {
    data: [],
    loading: true,
    onSelectItem: () => { }
}

EmployeeList.propTypes = {
    handleDelete: PropTypes.func,
    data: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
}

export default EmployeeList;