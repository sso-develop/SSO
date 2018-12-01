import React, { Component } from 'react';
import Enum from '../common/Enum.js';
import $ from 'jquery';
import { Form, 
	Input, 
	Row, 
	Col, 
} from 'antd';

const RequestUrls = Enum.requestUrls;
const FormItem = Form.Item;
class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:{}
		}
	}
	componentDidMount() {
		this.loadUserInfo(this);
	}
	
	loadUserInfo(){
		let self = this;
		$.post(RequestUrls.findSystemUserInfoUrl, {},function(data) {
			self.setState({userInfo:data.data});
			
		});
	}
	render() {
		return (
			<div className='ant-advanced-search-form' >
				<Form>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="姓名"
					>
						<Input disabled = {true} value={this.state.userInfo.realName} />
					</FormItem>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="昵称"
					>
						<Input disabled = {true} value={this.state.userInfo.nickName}/>
					</FormItem>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="账号"
					>
						<Input disabled = {true} value={this.state.userInfo.operatorName}/>
					</FormItem>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="工号"
					>
						<Input disabled = {true} value={this.state.userInfo.staffNo}/>
					</FormItem>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="手机号"
					>
						<Input disabled = {true} value={this.state.userInfo.mobile}/>
					</FormItem>
				</Form>
			</div>
		)
	}
	
}
export default UserProfile;