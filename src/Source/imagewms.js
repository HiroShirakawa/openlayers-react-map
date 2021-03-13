import * as olSource from "ol/source";

function imagewms() {
	return new olSource.ImageWMS({
		url:'http://133.167.117.205:8080/geoserver/adapt/wms',
		params:{LAYERS:'flood_freq3_4326'},
		serverType:'geoserver'
	});
}

export default imagewms;