import React, { Component } from 'react';
import {withRouter} from 'react-router-dom' ;
import { Layout } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

import Side from "./component/layout/Side.jsx";
import Header from "./component/layout/Header.jsx";


const {Content } = Layout;

class App extends Component {
	constructor(props) {
    	super(props);
    	let menus = [{
			title: '用户管理',
            icon: 'user',
            to:'/userManager',
            showSub:true,
            subMenu:[{
            	title: '用户列表',
	            icon: 'lock',
	            to:'/userManager',
	            showSub:false,
	            subMenu:[{
	            	title: '用户权限',
		            icon: 'lock',
		            to:'/allotPermission'
		           }
	            ]
	           },
	           {
	            title: '登录用户',
                icon: 'android',
                to:'/loginUserManager'
	           }
            ]
    	},{
			title: '应用管理',
            icon: 'android',
            to:'/appManager'
    	},{
			title: '权限管理',
            icon: 'lock',
            to:'/permission/',
            /*
			showSub:true,
            subMenu:[
            	{
            		title: '权限管理',
		            icon: 'lock',
		            to:'/permission',
								showSub:false,
            	},{
            		title: '权限申请', 
		            icon: 'lock',
		            to:'/permissionApply',
					showSub:false,
            	},{
					title: '申请列表', 
					icon: 'lock',
					to:'/permissionApplyList',
					showSub:false,
				}
            ]*/
          
    	},{
			title: '  系统配置',
            icon: 'book',
            to:'/systemConfig'
    	},]
    	
    	this.state = {
    		menus:menus,
    		path:this.props.location.pathname
    	}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
    		path:nextProps.location.pathname
    	});
	}
	
  render() {
    return (

       <LocaleProvider locale={zhCN}>
         <Layout style={{ minHeight: '100vh' }}>
          <Side path = {this.state.path} menus ={this.state.menus}/>
          <Layout>
          <Header path = {this.state.path} menus ={this.state.menus}/>
            <Content style={{ margin: '	16px' }}>
                <div style={{padding:'5px','overflow':'inherit'}}>
                    {this.props.children}
                </div>
            </Content>
          </Layout>
        </Layout>
      </LocaleProvider>

    );
  }
}

export default withRouter(App);
