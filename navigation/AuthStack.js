import React,{useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/LoginScreen";
import LoginScreen from "../screens/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";




const Stack = createStackNavigator();

const AuthStack = () =>
{
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() =>{
   AsyncStorage.getItem("alreadyLaunched").then(value =>
   {
     if (value == null)
     {
       AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
       setIsFirstLaunch(true);
     }
     else
     {
       setIsFirstLaunch(false);
     }
   }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch === null)
  {
    return null;
  }
  else if (isFirstLaunch == true)
  {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerMode: 'none'
        }} >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else
  {
    return (
    <LoginScreen />
    );
  }
}

export default AuthStack;




