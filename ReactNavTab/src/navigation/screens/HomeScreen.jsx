import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, View, Text, Image,Button, TouchableOpacity, Alert } from 'react-native';

export function HomeScreen({ navigation }) {

   const handleButtonPress = () => {
         console.log('Get Started button pressed!');
          Alert.alert( 'Welcome!', 'Let\'s get started on this amazing journey.',[
              {   text: 'Proceed',  style: 'default',
                onPress: () => navigation.navigate('Profile'),
              }, ],{ cancelable: true }
          );
        };
      
  return (
     <View style={styles.container}>
            {/* Header title */}
            <ImageBackground source={require('../../assets/purple.png')} resizeMode="cover" style={styles.header}>
              <Text style={styles.title}>Welcome to My App</Text>
              <Text style={styles.subtitle}>Explore and enjoy!</Text>
            </ImageBackground>
            
            {/* Main Content */}
            <View style={styles.content}>
              <Text style={styles.welcometxt}>
                Hello there! Discover amazing features and services tailored just for you. Our app makes your life easier and more enjoyable!
              </Text>
              <Image source={require('../../assets/react-logo.png')} style={styles.image} resizeMode="contain" />
              <TouchableOpacity 
                style={styles.button} onPress={handleButtonPress} >
                <Text style={styles.buttontxt}>Get Started</Text>
            </TouchableOpacity>
            </View>
        </View>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  
  header: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#6C2DC7',

  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: 'white',
    marginBottom: 10,

  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.82)',
  },
  
  content: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcometxt: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
    color: 'black',
    lineHeight: 20,
  },

  image: {
    width: 110,
    height: 110,
    marginBottom: 40,
    backgroundColor: '#040720',
    borderRadius: 100,
    padding:20,
  },

  button: {
    backgroundColor: '#6C2DC7',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
  },

  buttontxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

});
