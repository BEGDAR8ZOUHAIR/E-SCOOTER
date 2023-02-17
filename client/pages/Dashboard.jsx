import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Card, Icon } from "react-native-elements";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [scooters, setScooters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadScooters = async () => {
    try {
      const response = await fetch("http://192.168.9.30:5000/client/scooters");
      const data = await response.json();
      setScooters(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadScooters();
  }, []);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const renderScooter = ({ item }) => {
    return <ScooterCard scooter={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Icon name="menu" color="#fff" onPress={openDrawer} />
      </View>
      <ImageBackground
        source={require("../assets/esccoter1.png")}
        style={styles.bgImage}
      >
        {isLoading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {scooters.map((scooter) => (
              <ScooterCard key={scooter.id} scooter={scooter} />
            ))}
          </ScrollView>
        )}
      </ImageBackground>
    </View>
  );
};

const ScooterCard = ({ scooter }) => {
  return (
    <Card>
      <Card.Title>{scooter.name}</Card.Title>
      <Card.Divider />
      <Text style={styles.cardText}>{scooter.serialNumber}</Text>
      <Text style={styles.cardText}>{scooter.latitude}</Text>
      <Text style={styles.cardText}>{scooter.longitude}</Text>
      <Text style={styles.cardBattery}>{scooter.battery}</Text>

      <Text style={styles.cardStatus}>{scooter.status}</Text>
      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.buttonText}>Reserve Now</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#3ED400",

    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardText: {
    marginBottom: 10,
  },
  cardBattery: {
    marginBottom: 10,
    color: "#3ED400",
  },
  cardStatus: {
    marginBottom: 10,
    color: "tomato",
  },
  reserveButton: {
    backgroundColor: "#000",
    borderRadius: 10,

    padding: 10,

    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 16,
  },
  loadingText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 20,
  },
});

export default DashboardScreen;


