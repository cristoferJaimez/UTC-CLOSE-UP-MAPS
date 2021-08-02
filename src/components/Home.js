import React, { useEffect, useState } from "react";
import Control from "@skyeer/react-leaflet-custom-control";
import logo from "../logo.svg";
import { LocalitationBusinessIcon } from "../components/IconLocalitation";

import { Link } from "react-router-dom";

import MapCo from "./MapCol.js";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "leaflet";
import SelectItem from "./SelectItems";

const Home = () => {
  const [state, setStated] = useState({
    lng: 0,
    lat: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setStated({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 5 }
    );
  });

  const viewRes = () => {};

  return (
    <div>
      <Map
        center={{ lat: "4.6988183", lng: "-74.0546614" }}
        zoom={5.6}
        maxZoom={18}
      >
        <MapCo></MapCo>

        <Control position="topright">
          <div className="container">
            <div className="row">
              <SelectItem></SelectItem>
            </div>
          </div>
        </Control>

        <Control position="topright">
          <button
            className="btn btn-success btn-sm shadow-sm"
            style={{ border: "2px solid #FFF", borderRadius: "50%" }}
            onClick={viewRes}
          >
            <span className="material-icons">file_upload</span>
          </button>
        </Control>

        <Control position="topright">
          <button
            className="btn btn-light btn-sm shadow-sm"
            style={{ border: "2px solid #FFF", borderRadius: "50%" }}
            onClick={viewRes}
          >
            <span className="material-icons">note</span>
          </button>
        </Control>

        <Control position="topright">
          <button
            className="btn btn-light btn-sm shadow-sm"
            style={{ border: "2px solid #FFF", borderRadius: "50%" }}
            onClick={viewRes}
          >
            <span className="material-icons">history</span>
          </button>
        </Control>

        <Control position="topright">
          <button
            className="btn btn-light btn-sm shadow-sm"
            style={{ border: "2px solid #FFF", borderRadius: "50%"     }}
            onClick={viewRes}
          >
            {" "}
            <span className="material-icons">my_location</span>{" "}
          </button>
        </Control>



        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
};

export default Home;
