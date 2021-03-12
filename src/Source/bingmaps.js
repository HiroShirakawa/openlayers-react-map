import * as olSource from "ol/source";

function bingmaps() {
	return new olSource.BingMaps({
          key:'AtoYPJKe4WzvUzTQ5YVsitDoK_16pGPQqkWrEQrjRrXgdXuaSsK-61bNxnMAPJCF',
		  imagerySet:'Aerial',
	});
}

export default bingmaps;