import React from "react";
import { Marker, Popup } from "react-leaflet";
import { LocalitationBusinessIcon } from "../../../IconLocalitation";

export default function MarkBusiness(props) {
  const { business } = props;
  const markers = business.map((pha, i) => (
    <Marker
      key={i}
      position={{ lat: pha.Latitud, lng: pha.Longitud }}
      icon={LocalitationBusinessIcon}
    >
      <Popup>
        <table className="table table-ligth table-sm">
          <thead>
            <tr>
              <td>Empresa:</td>
              <td>{pha.Nombre_empresa}</td>
            </tr>
            <tr>
              <td>Dirección: </td>
              <td>{pha.Direccion}</td>
            </tr>
            <tr>
              <td> Localidad:</td>
              <td> {pha.Localidad}</td>
            </tr>
            <tr>
              <td>Barrio:</td>
              <td> {pha.Barrio}</td>
            </tr>
            <tr>
              <td>Codigo Barrio: </td>
              <td>{pha.Codigo_Barrio}</td>
            </tr>
            <tr>
              <td>Telefono: </td>
              <td>{pha.Telefono}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{pha.Email}</td>
            </tr>
            <tr>
              <td>Sitio Web: </td>
              <td>{pha.Sitio_Web}</td>
            </tr>
          </thead>
        </table>
      </Popup>
    </Marker>
  ));

  return markers;
}
