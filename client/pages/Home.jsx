import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async function fetchMarkers() {
      const response = await fetch('http://192.168.10.37:5000/scouter/getScouter');
      const data = await response.json();
      setMarkers(data);
    }
    fetchMarkers();
  }, []);

  return (
    <MapView
      style={{ flex: 1, width: '100%', height: '100%' }}
      initialRegion={{
        latitude: 32.3123,
        longitude: -9.2311,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          title={marker.nom}
          description={marker.description}
          image={require('../assets/icone.png')}
        />
      ))}
    </MapView>
  );
};

export default App;
