import React, { Component } from 'react';
import Enum from '../common/Enum.js';
import $ from 'jquery';


import { Form, Input, Row, Col } from 'antd';


const RequestUrls = Enum.requestUrls
const FormItem = Form.Item;
class SystemConfig extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sysConfig:{}
		};
		
	}
	
	componentDidMount() {
		this.loadSystemConfig(this);
	}
	
	loadSystemConfig(){
		let self = this;
		$.post(RequestUrls.findSystemConfigUrl, {},function(data) {
			
			self.setState({sysConfig:data.data})
			
		});
	}
	
	render() {
		
		return (
			<div className='ant-advanced-search-form' >
				<Form>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="登录路径"
					>
						<Input disabled = {true} value={this.state.sysConfig.ssoServerUrl}/>
					</FormItem>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="应用CODE"
					>
					<Input disabled = {true} value={this.state.sysConfig.ssoAppCode}/>
					</FormItem>
					<FormItem
						labelCol = {{sm:5}}
						wrapperCol =  {{sm:16}}
						label="VM模板"
					>
					<Input disabled = {true} value={this.state.sysConfig.velocityFile}/>
					</FormItem>
				</Form>
			</div>
		)
	}
	
}
const SystemConfigForm = Form.create()(SystemConfig);
export default SystemConfigForm;