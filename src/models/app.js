import { ajaxPost } from '../common/utils.js';
import Enum from '../common/Enum.js';
const RequestUrls = Enum.requestUrls

export default {
	namespace: 'app',
	state: {list:[]},
	reducers: {
		initDataList(state,{payload}){ 
			state.list = payload
			return {...state}
      	},
	},
	effects: {
		* getData({payload}, {call, put }) {
			const value = yield call(getData)
			yield put({type:'initDataList',payload:value})
		}
	},
	
};

function getData(){
	return new Promise((res)=>{
		ajaxPost(RequestUrls.sysApp.queryAllUumsSysAppUrl,{},function(data){
			if(data.success){
				res(data.data)
			}
		});
	})
}
