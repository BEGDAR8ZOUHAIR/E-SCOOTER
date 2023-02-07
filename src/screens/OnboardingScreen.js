import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
      <Onboarding
          pages={[
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/images/onboarding-img1.png')} />,
                  title: 'Onboarding',
                  subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/images/onboarding-img2.png')} />,
                  title: 'The Title',
                  subtitle: 'This is the subtitle that sumplements the title.',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/images/onboarding-img3.png')} />,
                  title: 'Triangle',
                  subtitle: "Beautiful, isn't it?",
              },
          ]}
          onDone={() => navigation.navigate("Login")}
          onSkip={() => navigation.navigate("Login")}
          showSkip={true}
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
