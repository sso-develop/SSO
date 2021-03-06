import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout ,
	Breadcrumb,
	Icon,
	Tooltip,
	Avatar,
	Row,
	Col,
} from 'antd';

const { Header } = Layout;
class Heade extends Component {
	
	renderBreadcrumb(){
		const menus = this.props.menus;
		const path = this.props.path;
		const routes = [{
		  path: '/',
		  breadcrumbName: '首页'
		}];
		menus.map(function (menu, i) {
			if(path === menu.to){
				routes.push({path: menu.to,breadcrumbName: menu.title})
			}else{
				if(menu.subMenu){
					menu.subMenu.map(function (m1, i) {
						if(path === m1.to){
							routes.push({path: menu.to,breadcrumbName: menu.title})
							routes.push({path: m1.to,breadcrumbName: m1.title})
						}else{
							if(m1.subMenu){
								m1.subMenu.map(function (m2, i) {
									if(path === m2.to+'/1'){
										routes.push({path: menu.to,breadcrumbName: menu.title})
										routes.push({path: m1.to,breadcrumbName: m1.title})
										routes.push({path: m2.to,breadcrumbName: m2.title})
									}
									return '';
								})
							}
							
						}
						return '';
					})
				}
				
			}
			return '';
      })
		
	   return (<Breadcrumb key='1' routes={routes} style={{margin: '16px', float:'left'}}/>)
	}
  render() {
    return (
       <Header style={{ background: '#fff', padding: 0 }}>
	      
	     <div>
					<Row>
						<Col span={22}>
							{this.renderBreadcrumb()}
						</Col>
						<Col span={1} >
							<Link to='/userProfile'>{window.userName}</Link>
						</Col>
						<Col span={1}>
							<div style={{paddingTop:'24px'}}>
								<Tooltip title="点击登出">
									<a href='logout'><Icon type="logout" style={{ fontSize: 19, color: '#08c' }} /></a>
								</Tooltip>
							</div>
						</Col>
					</Row>
	     </div>
       </Header>
    );
  }
}

export default Heade;
