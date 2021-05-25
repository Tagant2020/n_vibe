import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

 
class SimpleMap extends Component {
  render() {
    return (
      <div style={{ height: '80vh', width: '100%' }}>
          {console.log(this.props.lat+'je vois')}
        <MapContainer className='leaflet-container' center={[this.props.lat, this.props.lng]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[this.props.lat, this.props.lng]}>
                <Popup>
                    VELIB <br /> Système de transport public
                </Popup>
            </Marker>
        </MapContainer>
      </div>
    );
  }
}
 
export default SimpleMap;