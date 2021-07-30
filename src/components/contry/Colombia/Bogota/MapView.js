import React from "react";

import {
  Map,
  TileLayer,
  LayersControl,
  GeoJSON,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

//json city
import bogota from './MarksUTC.js'

//data point pharmaty
import {pharmaty} from '../../../../assets/city/Bogota/pointPhamacy.json'
import {business} from '../../../../assets/city/Bogota/infoBusiness.json'


//marker point
import MarkerBogota from "./MarkView.js";
import MarkerBogotaBusiness from "./MarkBusiness.js";
//UTC-BOGOTA
import MarkerUTC from "./MarksUTC.js";



const MapView = () => {
  return (
    <Map
      center={{ lat: "4.6988183", lng: "-74.0546614" }}
      zoom={18}
      maxZoom={18}
    >
      <MarkerBogotaBusiness business={business}></MarkerBogotaBusiness>

      <LayersControl position="topleft">
        <LayersControl.Overlay checked name="Pharmacy">
          <LayerGroup>
          <MarkerBogota pharmaty={pharmaty}></MarkerBogota>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="UTC-BOGOTA">
          <LayerGroup>
            <MarkerUTC></MarkerUTC>
          </LayerGroup>
        </LayersControl.Overlay>

      </LayersControl>

     

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};

export default MapView;
