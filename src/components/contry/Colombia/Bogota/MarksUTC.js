import React from "react";
import {
    GeoJSON
  } from "react-leaflet";
  
//json city
import bogota from "../../../../data/country/Colombia/Bogota/CLOSE_UP_UTC_BOGOTA.json";
const onEachFeature = (feature, layer) => {
    const popupContent = `<center>
                            <h2>UTC ${feature.properties.UTC} </h2>
                            Name: ${feature.properties.Name} 
                            <br> Localidad: ${feature.properties.LOCALIDAD}
                            <br> UTC: ${feature.properties.UTC}
                            <br> Codigo Barrio: ${feature.properties.CODIG_BARRIO}
                            <br> Estrato: ${feature.properties.area_ses_strata}
                            <br> ? : ${feature.properties.pop_total_population}
                            <br> Número de Farmacias : ${feature.properties.NUMEROS_FARMACIAS}
                           <center>
                           `;
    if (feature.properties && feature.properties.popupContent) {
      popupContent += feature.properties.popupContent;
    }
    layer.bindPopup(popupContent);
  };
  


const MarksUTC = () => {
  return (
      <GeoJSON
        data={bogota.features}
        style={{
          color: "blue",
          fillOpacity: 0.1,
          opacity: 0.3,
          weight: 3,
          dashArray: "3",
        }}
        onEachFeature={onEachFeature}
      />

  );
};

export default MarksUTC;
