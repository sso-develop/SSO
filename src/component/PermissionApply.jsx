import React, { Component } from 'react';
import { Form,message,Row,Col,Input,Transfer,Select,Button,DatePicker } from 'antd';
import Enum from '../common/Enum.js';
import $ from 'jquery';
const FormItem = Form.Item;

class AllotPermission extends Component {
	constructor(props) {
		super(props);
		this.state = {
			permissionList:[],
			appList:[],
			formData:{},
		}
		
	}
	
	componentDidMount(){
		this.getAllApp();
	}
	
	handleFormDateChange(date,dateString){
		Object.assign(this.state.formData,{periodValidity:dateString})
	}
	
	getAllApp(){
		let self = this;
		//所有权限
		$.post(Enum.requestUrls.sysApp.queryAllUumsSysAppUrl, {},function(data) {
			if(!data.success){
				message.error(data.msg)
			}else{
				self.setState({ appList: data.data });
			}
		});
	}
	
	getPermission(_id){
		let self = this;
		//所有权限
		$.post(Enum.requestUrls.sysPermission.queryUumsSysPermissionUrl, {id:_id},function(data) {
			if(!data.success){
				message.error(data.msg)
			}else{
				self.setState({ permissionList: data.data });
			}
		});
		
	}
	/******************************/
	handleAppSearchChange(v){
		this.getPermission(v);
	}
	handleSubmit(e){
		e.preventDefault();
		$.post(Enum.requestUrls.permissionApply.insertUumsPermissionApplyUrl, this.state.formData,function(data) {
			if(!data.success){
				message.error(data.msg)
			}else{
				message.info('添加申请成功')
			}
		});
		
	}

	render(){
		return(
			<div className='ant-advanced-search-form' >
					<Form
										horizontal = {'true'} 
										onSubmit={this.handleSubmit.bind(this)}
					>
						<FormItem
							labelCol = {{sm:5}}
							wrapperCol =  {{sm:16}}
							label="应用"
						>
							<Select
								placeholder = '请选择'
								onSelect={this.handleAppSearchChange.bind(this)}
							>
								{
									this.state.appList.map(function(item) {
										return <Select.Option key={item.appCode} value={item.id}>{item.name}</Select.Option>
									})
								}
							</Select>
						</FormItem>
						<FormItem
							labelCol = {{sm:5}}
							wrapperCol =  {{sm:16}}
							label="权限"
						>
							<Select
								placeholder = '请选择'
							>
								{
									this.state.permissionList.map(function(item) {
										return	<Select.Option key={item.id} value='item.code'>{item.name}</Select.Option>
									})
								}
							</Select>
						</FormItem>
						<FormItem
							labelCol = {{sm:5}}
							wrapperCol =  {{sm:16}}
							label="有效期"
						>
							<DatePicker 
								onChange={this.handleFormDateChange.bind(this)}
							/>
						</FormItem>
						<FormItem
							labelCol = {{sm:5}}
							wrapperCol =  {{sm:16}}
							label="备注"
						>
							<Input/>
						</FormItem>
						<FormItem 
							wrapperCol =  {{sm:16,xs:24}}
						>
							<Button style={{float: 'right'}} type="primary" htmlType="submit">确认</Button>
						</FormItem>
					</Form>
			</div>
			
		)
	}
}
export default Form.create()(AllotPermission);