import React, { Component } from 'react';
import { Form,message,Row,Col,Input,Transfer,Select,
    Divider ,
} from 'antd';
import Enum from '../common/Enum.js';
import { ajaxPost } from '../common/utils.js';
import $ from 'jquery';
const FormItem = Form.Item;
const RequestUrls = Enum.requestUrls
class AllotPermission extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:{
				id:props.match.params.id
			},
			allApp:[],
			targetKeys:[],
			mockData:[]
		}
		this.getUser(this);
		this.queryAllApp(this);
	}
	queryAllApp(){
    		let that = this;
    		$.post(RequestUrls.sysApp.queryAllUumsSysAppUrl, {},function(data) {
    		  if(data.success){
    		  	that.setState({
    		  		allApp:data.data
    		  	});
    		  }
    		});
    	}
	
	getUser(){
		let that = this;
		ajaxPost(Enum.requestUrls.sysUser.queryUumsUserInfoByIdUrl,{id:this.state.userInfo.id},function(res){
		    that.setState({userInfo:res.data})
		});
	}
	
	getPermission(_appId){
		let that = this;
		//拥有权限
		var params = {
		    userId:this.state.userInfo.id,
		    appId:_appId
		}

		$.post(Enum.requestUrls.sysPermission.queryUumsSysPermissionUrl, params,function(data) {
		  if(!data.success){
		  	message.error(data.msg)
		  }else{
		 	 const d = data.data.map(function (item){
		  		return item.id
		 	 })
		  	that.setState({ targetKeys: d });
		  }
		});
		//所有权限
		var p = {
        		    appId:_appId
        		}
		$.post(Enum.requestUrls.sysPermission.queryUumsSysPermissionUrl, p,function(data) {
		  if(!data.success){
		  	message.error(data.msg)
		  }else{
			 const d = data.data.map(function (item){
		  		return {
		  			key: item.id,
				    title: item.name,
				    description: item.des,
				    disabled: false
		  		}
		  	});
		  	that.setState({ mockData: d });
		  }
		});
		
	}
	onAppChangeHandle(v){
	    this.getPermission(v);
	}
	handleChange(nextTargetKeys, direction, moveKeys) {
		let permissionIds = '';
		let that = this;
		for(var i = 0 ;i < moveKeys.length;i++){
			if(i === moveKeys.length-1 ){
				permissionIds += moveKeys[i];
			}else{
				permissionIds += moveKeys[i]+',';
			}
		}
		if(direction === 'right'){
			$.post(Enum.requestUrls.sysUser.insertUumsUserPermissionRelationUrl, {permissionIds:permissionIds,userId:this.state.userInfo.id},function(data) {
			  if(!data.success){
			  	message.error(data.msg)
			  }else{
				 that.setState({ targetKeys: nextTargetKeys });
			  }
			});
		}else{
			$.post(Enum.requestUrls.sysUser.deleteUumsUserPermissionRelationUrl, {permissionIds:permissionIds,userId:this.state.userInfo.id},function(data) {
			  if(!data.success){
			  	message.error(data.msg)
			  }else{
				 that.setState({ targetKeys: nextTargetKeys });
			  }
			});
		}
	}
	
	render(){
		
		const mockData = [];
		for (let i = 0; i < 20; i++) {
		  mockData.push({
		    key: i.toString(),
		    title: 'content'+i,
		    description: 'description of content',
		    disabled: false
		  });
		}
		return(
		   <div>
			<div className='ant-advanced-search-form' >
			 <Form layout="inline">
				<Row>
					<Col span={6}>
			           <FormItem label='用户帐号'>
			             {this.state.userInfo.operatorName}
			          </FormItem>
			        </Col>
			        <Col span={6}>
			           <FormItem label='用户昵称'>
			             {this.state.userInfo.nickName}
			          </FormItem>
			        </Col>
			        <Col span={6}>
			           <FormItem label='用户姓名'>
			             {this.state.userInfo.realName}
			          </FormItem>
			        </Col>
			        <Col span={6}>
			           <FormItem label='用户姓名'>
			             {this.state.userInfo.mobile}
			          </FormItem>
			        </Col>
				</Row>
				<Row>
					<Col span={6}>
			           <FormItem label='用户工号'>
			             {this.state.userInfo.staffNo}
			          </FormItem>
			        </Col>
			        <Col span={12}>
			           <FormItem label='请选择系统'>
			             <Select
			             	style={{ width: 300 }}
			             	onChange = {this.onAppChangeHandle.bind(this)}
			             >
			             {
			                this.state.allApp.map(function (app, i) {
                                return (<Select.Option key={app.id} value={app.id}>{app.name}/{app.appCode}</Select.Option>)
                            })
			             }
						  </Select>
			          </FormItem>
			        </Col>
				</Row>
			</Form>
			</div>
			<Divider>分配权限</Divider>
			<div className='ant-advanced-search-form' style = {{marginTop: '10px'}}>
                <Transfer
                    listStyle={{
                      width: 300,
                      height: 300,
                    }}
                    dataSource={this.state.mockData}
                    targetKeys={this.state.targetKeys}
                    titles={['所有权限', '已有权限']}
                    operations={['添加', '删除']}
                    showSearch
                    render={item => item.title}
                    onChange={this.handleChange.bind(this)}
                    /*targetKeys = {targetKeys}*/
                  />
		      </div>
			</div>
			
		)
	}
}
export default Form.create()(AllotPermission);;