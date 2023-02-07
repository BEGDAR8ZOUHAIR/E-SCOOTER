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
                  backgroundColor: '#FFEBCC',
                  image: <Image source={require('../../assets/esccoter2.png')} />,
                  title: 'Onboarding',
                  subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                  backgroundColor: '#a6e4d0',
                  image: <Image source={require('../../assets/esccoter1.png')} />,
                  title: 'The Title',
                  subtitle: 'This is the subtitle that sumplements the title.',
              },
              {
                  backgroundColor: '#fdeb93',
                  image: <Image source={require('../../assets/esccoter3.png')} />,
                  title: 'Triangle',
                  subtitle: "Beautiful, isn't it?",
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
