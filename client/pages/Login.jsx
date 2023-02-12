
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

    const handleLogin = async () => {
      try {
        const response = await fetch('http://192.168.10.37:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.error) {
          alert(data.error);
        } else {
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../assets/esccoter1.png")}
      />

      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        {/* <Image source={require("../assets/email.png")} style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.formContainer}>
        {/* <Image source={require("../assets/email.png")} style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48,
  },
  formContainer: {
    width: "85%",
    
  },
  input: {
    height: 40,
    backgroundColor: "#F9F9F9",
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 40,
    backgroundColor: "#92E3A9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
 
});

export default LoginScreen;


