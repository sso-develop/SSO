import moment from 'moment'; 


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

function getAllApp(){
}

module.exports = {
	getLocationQuery,
	onHandleInputChangeEvent,
	onHandleSelectChangeEvent,
	onHandleDateTimeChangeEvent,
	isEmpty,
}
