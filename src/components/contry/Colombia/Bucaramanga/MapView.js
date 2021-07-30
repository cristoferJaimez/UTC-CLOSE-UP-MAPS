import React from 'react'
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs
} from 'react-google-maps'

const Map = (props) =>{
    return (
        <GoogleMap 
        defaultCenter={ {lat: 4.6988183, lng: -74.0546614} }
        defaultZoom={10} />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)