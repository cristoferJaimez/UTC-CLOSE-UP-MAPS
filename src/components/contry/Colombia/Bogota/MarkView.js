import React from "react";
import { Marker, Popup } from "react-leaflet";
import {
  IconLocalitation,
  LocalitationBusinessIcon,
  LocalitationPharmacyIcon,
} from "../../../IconLocalitation";


export default function MarkView(props) {
  const { pharmaty } = props;
  

  const markers = pharmaty.map((pha, i) => (
    <Marker
      key={i}
      position={{ lat: pha.Latitud, lng: pha.Longitud }}
      icon={LocalitationPharmacyIcon}
    >
      <Popup>
        <table className="table table-dark table-sm">
          <thead>
            <tr>
              <td>UTC:</td>
              <td>{pha.COD_ZONA_GEOGRAFICA}</td>
            </tr>
            <tr>
              <td>Nombre: </td>
              <td>{pha.NOMBRE_ORIGINAL}</td>
            </tr>
            <tr>
              <td> Localidad:</td>
              <td> {pha.NOM_LOCALIDAD}</td>
            </tr>
            <tr>
              <td>Barrio:</td>
              <td> {pha.NOMBRE_BARRIO}</td>
            </tr>
            <tr>
              <td>Codigo Barrio: </td>
              <td>{pha.COD_BARRIO}</td>
            </tr>
          </thead>
        </table>
      </Popup>
    </Marker>
    
  ));

  return markers;
}

