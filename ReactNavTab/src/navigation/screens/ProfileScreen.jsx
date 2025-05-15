import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/cat.png')} 
        style={styles.avatar}
      />
      <View style={styles.nameRow}>
        <Text style={styles.name}>Jieya Lingaolingao</Text>
        <TouchableOpacity onPress={() => alert('Edit Profile clicked!')}>
          <MaterialIcons name="edit" size={24} color="black" style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.email}>catz@gmail.com</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>About Me</Text>
        <Text style={styles.infoText}>
            Always eager to learn and grow, I enjoy turning ideas into reality through code.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#6C2DC7',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center', 
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  editIcon: {
    marginLeft: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',  
  },
  infoBox: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f0e8ff',
    shadowColor: '#6C2DC7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center', 
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',  
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'center',  
  },
});
