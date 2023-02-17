// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, FlatList , ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// // burger menu
// import { DrawerActions } from '@react-navigation/native';

// // ajouter le bouton burger menu

// const DashboardScreen = () => {
//   const navigation = useNavigation();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://192.168.9.30:5000/client/scooters")
//       .then((response) => response.json())
//       .then((json) => {
//         setUsers(json);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//   <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Dashboard</Text>
//         <Icon
//           name='menu'
//           color='#fff'
//           onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          
//         />
      
//       </View>
//       <ScrollView>
//         <FlatList
//           data={users}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Card>
//               <Card.Title>{item.nom}</Card.Title>
//               <Card.Divider />
//               <Text style={{ marginBottom: 10 }}>
//                 {item.description}
//               </Text>
//               <Button
//                 icon={<Icon name='code' color='#ffffff' />}
//                 buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
//                 title='VIEW NOW' />
//             </Card>
//           )}
//         />
//       </ScrollView>
//     </View>
//   );
// };
    // const navigation = useNavigation();
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

 



import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const DashboardScreen = () =>
{
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://192.168.9.30:5000/client/scooters";

  useEffect(() =>
  {
    fetch(url)
      .then((response) => response.json())
      .then((json) =>
      {
        setUsers(json);
        setLoading(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Icon
          name="menu"
          color="#fff"
          onPress={() => {
            setIsDrawerOpen(true);
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          />
      </View>
      <ImageBackground
        source={require("../assets/esccoter1.png")}
        style={styles.BgImage}
        >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
            <FlatList
              ScrollView
            data={users}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>{item.serialNumber}</Text>
                <Text style={{ marginBottom: 10 }}>{item.latitude}</Text>
                <Text style={{ marginBottom: 10 }}>{item.longitude}</Text>
                <Text style={{ marginBottom: 10 }}>{item.battery}</Text>
                <Text style={{ marginBottom: 10 }}>{item.status}</Text>

                <Button
                  icon={<Icon name="code" color="#ffffff" />}
                  title="Reserver Now"
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}

                />
              </Card>
            )}
          />
          )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#92E3A9",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  BgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.7,
  },
});

export default DashboardScreen;

