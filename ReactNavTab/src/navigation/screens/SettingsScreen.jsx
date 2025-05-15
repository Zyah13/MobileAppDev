import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.settingItem} onPress={() => Alert.alert('Navigate to Security & Privacy')}>
        <View style={styles.iconText}>
          <MaterialIcons name="security" size={24} color="black" />
          <Text style={styles.settingText}>Security & Privacy</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => Alert.alert('Navigate to Account')}>
        <View style={styles.iconText}>
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={styles.settingText}>Account</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginBottom: 30,
  },
   
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 15,
    fontSize: 17,
    color: '#333',
  },
});
