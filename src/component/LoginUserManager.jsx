import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Table,message,Divider,Popconfirm,Form,Input,Button,Row,Col,Modal} from 'antd';
import Enum from '../common/Enum.js';
import {getLocalTime} from '../common/DataFormat.js';
import $ from 'jquery';
const FormItem = Form.Item;
const RequestUrls = Enum.requestUrls
class LoginUserManager extends Component {
	
	constructor(props) {
    	super(props);
    	this.state = {
    		visible:false,
    		loading:false,
    		formOp:'',
    		searchData:{
    			nickName:''
    		},
    		formData:{
    			id:0,
    			nickName:'',
    			realName:'',
    			operatorName:'',
    			staffNo:'',
    			mobile:''
    		}
    	}
    }
	componentWillMount() {
		this.loadListData(this);
	}
  loadListData(){
  	let that = this;
  	$.post(RequestUrls.queryCurrentLoginUsersUrl,{},function(data){
  		that.setState({
  		    dataSource:data.data
  		});
  	});
  }

  render() {
	const columns = [{
	  title: '昵称',
	  dataIndex: 'account',
	  key: 'account',
	}, {
	  title: 'token',
	  dataIndex: 'token',
	  key: 'token',
	},{
	  title: '失效时间',
	  dataIndex: 'expired',
	  key: 'expired',
	  render: (text, record) => {
	    return getLocalTime(text);
	  }
	}];
    const that = this;
    return (
       <div>
       		<Form>

       		</Form>
       		<Table 
       			bordered 
       			dataSource={this.state.dataSource}
       			columns={columns} 
       			loading = {this.state.loading}
       			rowKey={record => record.userId}
       		/>
       </div>
    );
  }
}
const LoginUserManagerForm = Form.create()(LoginUserManager);
export default LoginUserManagerForm;