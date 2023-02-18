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

import React, { useState, useEffect } from 'react';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 32.3123;
const LONGITUDE = -9.2311;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
  const [region, setRegion] = React.useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  // const [markers, setMarkers] = useState([]);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  // useEffect(() => {
  //   async function fetchMarkers() {
  //     const response = await fetch(
  //       "http://http://192.168.9.30:5000/client/scooters"
  //     );
  //     const text = await response.text();
  //     const data = JSON.parse(text);
  //     setMarkers(data);
  //   }
  //   fetchMarkers();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChange={onRegionChange}
      >
        {/* {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.nom}
            description={marker.description}
          />
        ))} */}

        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title={"Current Location"}
        />
        
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onRegionChange(region)}
          style={[styles.bubble, styles.button]}
        >
          <Text>Move to Current Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },

  button: {
    width: 140,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

export default Map;









