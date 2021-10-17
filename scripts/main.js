
	
	
function LFoStorageData(key, dflt_val) {
	var items = dflt_val;
	var data = window.localStorage.getItem('photography.sunpixel.' + key);
	if (data) {
		try {
			items = JSON.parse(data);
		}
		catch(err) {
			items = dflt_val;
		}
	} else {
		items = dflt_val;
	}
	return items;
}
function LFoLocalStorageSave(key, val) {
	window.localStorage.setItem('photography.sunpixel.' + key, JSON.stringify(val));
}
	



	



	


