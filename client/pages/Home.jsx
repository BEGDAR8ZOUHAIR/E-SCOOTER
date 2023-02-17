// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Image } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const App = () => {
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     async function fetchMarkers() {
//       const response = await fetch("http://192.168.9.30:5000/client/scooters");
//       const data = await response.json();
//       setMarkers(data);
//     }
//     fetchMarkers();
//   }, []);

//   return (
//     <MapView
//       style={{ flex: 1, width: "100%", height: "100%" }}
//       initialRegion={{
//         latitude: 32.3123,
//         longitude: -9.2311,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//       onError={(error) => console.log(error)}
//     >
//       {markers.map((marker) => (
//         <Marker
//           key={marker.id}
//           coordinate={{
//             latitude: marker.latitude,
//             longitude: marker.longitude,
//           }}
//           title={marker.nom}
//           description={marker.description}
//         />
//       ))}
//     </MapView>
//   );
// };

// export default App;

import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
