import React, { useState, useEffect } from "react";
//JSON DATA Point
import { pharmaty } from "../../assets/city/Bogota/pointPhamacy.json";
import { features } from "../../data/country/Colombia/Bogota/CLOSE_UP_UTC_BOGOTA.json";

var classifyPoint = require("robust-point-in-polygon");

export default function positionJSON() {
  const colculationUTC = () => {
    var num_pha =  pharmaty.length
    pharmaty.map((pha, p) => {
      features.map((fea, i) => {
        var new_arr = [];

        fea.geometry.coordinates[0].map((val, ite, arr) => {
          new_arr.push(val);
        });
        var point = p +1;
        const res = classifyPoint(new_arr, [pha.Longitud, pha.Latitud]);
        if(Math.round((point * 100 ) / num_pha) < 100){
        document.title = Math.round((point * 100 ) / num_pha) + "% please wait..." ;
        }else{
          document.title = Math.round((point * 100 ) / num_pha) + "% complet..." ;
        }


        if (res == "-1") {
          if (pha.NOM_LOCALIDAD == fea.properties.LOCALIDAD && pha.NOMBRE_BARRIO ==  fea.properties.Name ) {
            document.getElementById("utcValue").innerHTML +=
              '<tr class = "table-success">' +
              "<td>" +
              p +
              "</td>" +
              "<td>" +
              pha.NOMBRE +
              "</td>" +
              "<td>" +
              pha.NOMBRE_BARRIO +
              "</td>" +
              "<td>" +
              pha.NOM_LOCALIDAD +
              "</td>" +
              "<td>" +
              fea.properties.UTC +
              "</td>" +
              "<td>" +
              fea.properties.Name +
              "</td>" +
              "<td>" +
              fea.properties.LOCALIDAD +
              "</td>" +
              "<td>" +
              res +
              "</td>" +
              "<td>" +
              "OK" +
              "</td>" +
              "</tr>";
          } else {
            document.getElementById("utcValue").innerHTML +=
              '<tr class = "table-danger">' +
              "<td>" +
              p +
              "</td>" +
              "<td>" +
              pha.NOMBRE +
              "</td>" +
              "<td>" +
              pha.NOMBRE_BARRIO +
              "</td>" +
              "<td>" +
              pha.NOM_LOCALIDAD +
              "</td>" +
              "<td>" +
              fea.properties.UTC +
              "</td>" +
              "<td>" +
              fea.properties.Name +
              "</td>" +
              "<td>" +
              fea.properties.LOCALIDAD +
              "</td>" +
              "<td>" +
              res +
              "</td>" +
              "<td>" +
              "NOT OK" +
              "</td>" +
              "</tr>";
          }
        } else if (res == "0") {
        } else {
        }
     
        return new_arr;
      });
      
    });
    
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <input type="file"></input>
          <button
            onClick={colculationUTC}
            className="btn btn-outline-success mx-auto btn-sm mb-5"
          >
            Calculation UTC
          </button>
          <div className= "col-12">
              <div  className="col-6-md pointA"> </div>
              <div  className="col-6-md pointB"> </div>

          </div>

          <table className="table table-sm d-none" style = {{fontSize: '0.7em'}}>
            <thead className="thead-dark">
              <tr className="">
                <th>id</th>
                <th>Name Pharmaty</th>
                <th>Location Pharmacy</th>
                <th>Direction Pharmacy</th>
                <th>UTC</th>
                <th>Direction UTC</th>
                <th>Location UTC</th>
                <th>Stated</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="utcValue"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
