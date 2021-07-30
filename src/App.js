import "./App.css";

import MapView from "./components/contry/Colombia/Bogota/MapView.js";
//import MapView from './components/contry/Colombia/Bucaramanga/MapView.js'

//const URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCKn9usKBQcOSCB7lKBgSGUEl1UvAZz4xc`

function App() {
  return (
    <div className="">
      <header className="">
        <MapView
          googleMapURL={URL}
          containerElement={<div style={{ height: "100vh" }}></div>}
          mapElement={<div style={{ height: "100vh" }}></div>}
          loadingElement={<p>Cargando</p>}
        ></MapView>
      </header>
    </div>
  );
}

export default App;
