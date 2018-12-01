
var project = '/sso';

module.exports = {
	requestUrls:{
		baseUrl:'/sso',
		sysApp:{
			insertUumsSysAppUrl:project+'/insertUumsSysApp.json',
			queryUumsSysAppByPagerUrl:project+'/queryUumsSysAppByPager.json',
        	deleteUumsSysAppByIdUrl:project+'/deleteUumsSysAppById.json',
            queryAllUumsSysAppUrl:project+'/queryAllUumsSysApp.json',
            updateUumsSysAppByIdUrl:project+'/updateUumsSysAppById.json'
		},
		sysPermission:{
			queryUumsSysPermissionByPagerUrl:project+'/queryUumsSysPermissionByPager.json',
			insertUumsSysPermissionUrl:project+'/insertUumsSysPermission.json',
			deleteUumsSysPermissionByIdUrl:project+'/deleteUumsSysPermissionById.json',
			updateUumsSysPermissionByIdUrl:project+'/updateUumsSysPermissionById.json',
			queryUumsSysPermissionUrl:project+'/queryUumsSysPermission.json'
		},
		sysUser:{
			queryUumsUserInfoByPagerUrl:project+'/queryUumsUserInfoByPager.json',
			insertUumsUserinfoUrl:project+'/insertUumsUserinfo.json',
			deleteUumsUserInfoByIdUrl:project+'/deleteUumsUserInfoById.json',
			updateUumsUserInfoByIdUrl:project+'/updateUumsUserInfoById.json',
			queryUumsUserInfoByIdUrl:project+'/queryUumsUserInfoById.json',
			insertUumsUserPermissionRelationUrl:project+'/insertUumsUserPermissionRelation.json',
			deleteUumsUserPermissionRelationUrl:project+'/deleteUumsUserPermissionRelation.json'
		},
		permissionApply:{
			insertUumsPermissionApplyUrl:project+'/insertUumsPermissionApply.json',
			queryUumsPermissionApplyByPagerUrl:project+'/queryUumsPermissionApplyByPager.json',
		},
		findSystemConfigUrl:project+'/findSystemConfig.json',
		findSystemUserInfoUrl:project+'/findSystemUserInfo.json',
		queryCurrentLoginUsersUrl:project+'/queryCurrentLoginUsers.json',
		
		
	}
}
