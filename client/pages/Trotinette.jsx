import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image , ImageBackground} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const TrotinetteScreen = () => {
   
    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.container} resizeMode='cover'  >
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/REGISTER.png')}
            />
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    BgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
});

export default TrotinetteScreen;

