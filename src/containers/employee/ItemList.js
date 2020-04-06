import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import ItemInfoList from '../../components/bill/ItemInfoList';
import fetchEmployeeItemList from '../../services/fetchEmployeeItemList';



class ItemList extends Component {
    
    componentDidMount() {
        const { fetchItemList } = this.props;
        console.log(fetchItemList);
        fetchItemList();
    }
    render() {
        const { itemList } = this.props;
        return (
            <>
                <ItemInfoList itemList={itemList}/>
                
            </>
        );
    }
}

const mapStateToProps = state => {
    
    return {

        itemList: state.employee.itemList,
        
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchItemList: fetchEmployeeItemList,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemList));