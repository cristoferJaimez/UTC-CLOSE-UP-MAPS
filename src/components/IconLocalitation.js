import L from 'leaflet'
//SVG Images
import Icon from '../assets/icon.svg'
import Pharmacy from '../assets/pharmacy.svg'
import IconDefault from '../assets/icon-default.svg'

//svg icon business
export const LocalitationBusinessIcon = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shodowUrl: null,
    shodowSize: null,
    shadowAnchor: null,
    iconSize:[100, 100],
    className: "leaflet-venue-icon"
}) 

//svg icon pharmacy
export const LocalitationPharmacyIcon = L.icon({
    iconUrl: Pharmacy,
    iconRetinaUrl: Pharmacy,
    iconAnchor: null,
    shodowUrl: null,
    shodowSize: null,
    shadowAnchor: null,
    iconSize:[20, 20],
    className: "leaflet-venue-icon"
}) 

//svg icon default
export const IconLocalitation = L.icon({
    iconUrl: IconDefault,
    iconRetinaUrl: IconDefault,
    iconAnchor: null,
    shodowUrl: null,
    shodowSize: null,
    shadowAnchor: null,
    iconSize:[40, 40],
    className: "leaflet-venue-icon"
}) 
