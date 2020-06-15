import React from "react";
import { Form, Col, Spinner, Row, FormControl, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeSelectedEmployee } from '../../actions/employeeListAction';
import { fetchEmployees } from '../../services/employeeApi';
import EmployeeList from "../../components/employee-list/EmployeeList";
import EmployeeDetail from "../../components/employee-list/EmployeeDetail";
import Pagination from "../../components/Pagination";
//import AddEmployeePopup from "../../components/employee-list/AddEmployeePopup";

const ITEMS_PER_PAGE = 5;

function createFilter({ search, page, itemPerPage }) {
    return {
        ten_nv: search ?? '',
        loai_sp: '',
        from: ((page ?? 1) - 1) * itemPerPage,
        count: itemPerPage,
    }
}

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            showAddPopup: false,
        }
        this.showAddEmployeePopup = this.showAddEmployeePopup.bind(this);
    }

    componentDidMount() {
        console.log('mo');
        const { search, page } = this.props;
        this.props.fetchEmployees(createFilter({
            search,
            page,
            itemPerPage: ITEMS_PER_PAGE
        }));
    }

    showAddEmployeePopup(v) {
        return this.setState({
            showAddPopup: v
        })
    }

    render() {
        const {
            employees,
            loading,
            selected,
            changeSelectedEmployee,
            page,
            history,
            search,
            addEmployee,
            deleteEmployee,
            count,
            changed
        } = this.props;

        const filter = createFilter({
            search,
            page,
            itemPerPage: ITEMS_PER_PAGE
        });

        if(changed) {
            history.push({
                pathname: "/people/employee-list",
                search: search ? `?q=${search}&page=1` : `?page=1`,
            })
        }

        return (
            <div>
                <div className="bill-form">
                    {
                        loading ?
                            <div className="d-flex justify-content-center w-100">
                                <Spinner animation="grow" variant="danger" className="d-flex my-2" />
                            </div>
                            :
                            <>
                                <Row>
                                    <Col sm={12} md={4}>
                                        <Form method="GET" action="/people/employee-list">
                                            <FormControl type="text" name="q" placeholder="Tìm kiếm theo tên..." className="ml-md-4" defaultValue={search} />
                                        </Form>
                                    </Col>
                                    <Col sm={12} md={8} className="d-flex">
                                        <Button className="ml-auto" variant="primary" onClick={() => this.showAddEmployeePopup(true)}>
                                            + Thêm nhân viên
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8} xs={12}>
                                        <EmployeeList data={employees} onSelectItem={(item) => changeSelectedEmployee(item)} handleDelete={(item) => deleteEmployee(item.idsp, filter)} />
                                        <Pagination max={parseInt(Math.ceil(count / ITEMS_PER_PAGE))} current={page ? parseInt(page) : undefined} onChange={(p) => {
                                            return history.push({
                                                pathname: "/people/employee-list",
                                                search: search ? `?q=${search}&page=${p}` : `?page=${p}`,
                                            })
                                        }} />
                                        {/* <DeliveryForm /> */}
                                    </Col>
                                    <Col sm={4} xs={12}>
                                        <EmployeeDetail item={selected ?? employees[0]} />
                                        {/*<PurchaseForm /> */}
                                    </Col>
                                </Row>
                            </>
                    }
                </div>
                {/* <AddEmployeePopup
                    show={this.state.showAddPopup}
                    onHide={() => this.showAddEmployeePopup(false)}
                    onSubmit={(s) => addEmployee(s, filter)}
                /> */}
            </div>

        );
    }
}

const mapStatetoProps = (state) => {
    return {
        employees: state.employeeList.employees,
        loading: state.employeeList.loading,
        selected: state.employeeList.selected,
        count: state.employeeList.count,
        changed: state.employeeList.changed,
        //loading: true,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchEmployees,
    changeSelectedEmployee,
    // addEmployee,
    // deleteEmployee,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Employees));