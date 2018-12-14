import moment from 'moment'; 


function parse(dateStr){
	if(dateStr === undefined || dateStr === ''){
		return undefined;
	}
	return moment(dateStr);
}

function getLocalTime(nS) {
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}

module.exports = {
	parse,
	getLocalTime
}
