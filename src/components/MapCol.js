import React from "react";
//import logo from '../logo.svg'


import {
    GeoJSON
  } from "react-leaflet";
  
//json city
import MapCo from '../data/country/Colombia/COLOMBIA.json';
import { features } from '../data/country/Colombia/COLOMBIA.json';

const onEachFeature = (feature, layer) => {
    const popupContent = `<center>
                            Depto.
                           <center>
                           `;
    if (feature.properties && feature.properties.popupContent) {
      popupContent += feature.properties.popupContent;
    }
    layer.bindPopup(popupContent);
  };
  
  

const MapCol = () => {
  return (
      <GeoJSON
        data={MapCo.features}
        style={{
          color: "red",
          fillOpacity: 0.1,
          opacity: 0.3,
          weight: 1,
          dashArray: "1",
        }}
        onEachFeature={onEachFeature}
      />

  );
};

export default  MapCol;
