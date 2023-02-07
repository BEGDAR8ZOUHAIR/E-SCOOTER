import React from 'react'
import { View, Text, Button, Image,StyleSheet , TouchableOpacity } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>

);
const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);





const OnboardingScreen = ({navigation}) => {
  return (
      <Onboarding
          onSkip={() => navigation.replace("Login")}
          onDone={() => navigation.navigate("Login")}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}

          
          pages={[
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../../assets/esccoter1.png')} />,
                  title: 'E-Scooter',
                  subtitle: 'The best app for renting electric scooters ',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../../assets/esccoter2.png')} />,
                  title: 'Find Scooters',
                  subtitle: 'Find the nearest scooters to your',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../../assets/esccoter3.png')} />,
                  title: 'Book Scooters',
                  subtitle: "Book your scooter in just a few clicks",
              },
          ]}
          
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
