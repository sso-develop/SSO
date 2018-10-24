
var project = '/sso';

module.exports = {
	requestUrls:{
		baseUrl:'/sso',
		sysApp:{
			insertUumsSysAppUrl:'/sso/insertUumsSysApp.json',
			queryUumsSysAppByPagerUrl:'/sso/queryUumsSysAppByPager.json',
        	deleteUumsSysAppByIdUrl:'/sso/deleteUumsSysAppById.json',
            queryAllUumsSysAppUrl:'/sso/queryAllUumsSysApp.json',
            updateUumsSysAppByIdUrl:'/sso/updateUumsSysAppById.json'
		},
		sysPermission:{
			queryUumsSysPermissionByPagerUrl:'/sso/queryUumsSysPermissionByPager.json',
			insertUumsSysPermissionUrl:'/sso/insertUumsSysPermission.json',
			deleteUumsSysPermissionByIdUrl:'/sso/deleteUumsSysPermissionById.json',
			updateUumsSysPermissionByIdUrl:'/sso/updateUumsSysPermissionById.json',
			queryUumsSysPermissionUrl:'/sso/queryUumsSysPermission.json'
		},
		sysUser:{
			queryUumsUserInfoByPagerUrl:'/sso/queryUumsUserInfoByPager.json',
			insertUumsUserinfoUrl:'/sso/insertUumsUserinfo.json',
			deleteUumsUserInfoByIdUrl:'/sso/deleteUumsUserInfoById.json',
			updateUumsUserInfoByIdUrl:'/sso/updateUumsUserInfoById.json',
			queryUumsUserInfoByIdUrl:'/sso/queryUumsUserInfoById.json',
			insertUumsUserPermissionRelationUrl:'/sso/insertUumsUserPermissionRelation.json',
			deleteUumsUserPermissionRelationUrl:'/sso/deleteUumsUserPermissionRelation.json'
		},
		permissionApply:{
			insertUumsPermissionApplyUrl:'/sso/insertUumsPermissionApply.json'
		},
		findSystemConfigUrl:project+'/findSystemConfig.json',
		
	}
}
