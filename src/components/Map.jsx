import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import iconLocation from "../assets/icon-location.svg"
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconLocation,
    iconSize: [35, 45],
});

function Map(props) {

    const { data } = props
    return (
        <>
            {JSON.stringify(data) !== "{}" && !Object.keys(data).includes("error") &&
            <>
                <MapContainer
                    key={data?.location?.lat + data?.location?.lng}
                    center={[data?.location?.lat, data?.location?.lng]}
                    zoom={13}
                    zoomControl={false}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[data.location?.lat, data.location?.lng]} key={data.location?.lat + data.location?.lng}>
                        <Popup>
                            {data.location?.country} <br /> {data.location?.city}
                        </Popup>
                    </Marker>
                </MapContainer>
                </>
            }
        </>
    )
}

export default Map