import React, { Component } from 'react';

import { connect } from 'dva';

import { Select } from 'antd';



@connect(({app = {}}) => ({
	appList:app.list
}))
export default class UserSelect extends Component {

	componentWillMount(){
		const {appList,dispatch} = this.props;
		if(appList === undefined || appList.length == 0){
			dispatch({
				type:'app/getData'
			})
		}
		
	}
	handleChange(){
		if(this.props.onChange != undefined){
			this.props.onChange();
		}
	}
  render() {
		const {appList} = this.props;
		const appItem = appList.map((a)=>(
				 <Select.Option key={a.id} value={a.id}>{a.name}/{a.appCode}</Select.Option>
		))
    return (
			<Select 
				style = {this.props.style}
				onChange={this.handleChange.bind(this)}
			>
				{appItem}
			</Select>
    );
  }
}
