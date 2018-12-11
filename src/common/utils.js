import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import {
    message,
    Modal
} from 'antd';


function getLocationQuery(){
	
}

function onHandleInputChangeEvent(_parmas,_name,e){
	let parmas = this.state[_parmas]
	parmas[_name] = e.target.value;
	this.setState(this.state)
}

function onHandleSelectChangeEvent(_parmas,_name,value){
	let parmas = this.state[_parmas]
	parmas[_name] = value;
	this.setState(this.state)
}

function onHandleDateTimeChangeEvent(_parmas,_name,date,dateString){
	let parmas = this.state[_parmas]
	parmas[_name] = dateString;
	this.setState(this.state)
}

function isEmpty(_s){
	if(_s === undefined || _s === ""){
		return true;
	}else{
		return false;
	}
}
/** ajax post
 * @param  _url
 * @param  _params
 * @param  _fn
 */
function ajaxPost(_url,_params,_fn){

    $.post(_url,_params,function(data){
        if(data.success){
            _fn(data);
        }else if(data.resultCode != undefined && data.resultCode.code === -4){
            var info = <p dangerouslySetInnerHTML={{ __html: '<a href = '+data.msg+'>重新登录</a>'}}/>
            Modal.confirm({
                title: '登录提示',
                content: info,
                okText: '确认',
                cancelText: '取消',
              });
        }else{
            message.error(data.msg)
        }
    });
}

module.exports = {
	getLocationQuery,
	onHandleInputChangeEvent,
	onHandleSelectChangeEvent,
	onHandleDateTimeChangeEvent,
	isEmpty,
	ajaxPost
}
