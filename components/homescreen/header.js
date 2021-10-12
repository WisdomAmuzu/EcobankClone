import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const header = () => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.itemLeft}>
      <Icon reverse name='account_cirlce' type='material' color='#ffff00' />
      </View>
      <View style={styles.itemRight}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        marginLeft: 20,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'space between',
      },
      headerText: {
        margin: 5,
        color: 'red',
        alignContent: "center",
      },
      itemLeft: {

      },
      itemRight: {},
});

export default header;
