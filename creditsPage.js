import { StatusBar } from "expo-status-bar";

import React, { cloneElement } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  FlatList
} from "react-native";

import { useState } from "react"; //
import { Touchable, TouchableOpacity } from "react-native-web";

const colors= [
  '#994F14','#DA291C','#FFCD00','#007A33','#EB9CA8', '#7C878E',
  '#8A004F','#000000','#10069F','#00a3e0','#4CC1A1'
]

const styles = StyleSheet.create({
  container: {
   width: "100%",
   backgroundColor: "white",

  },
  item: {
    fontSize: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});

const Credits = () => {

  return (
    <View style={styles.container}>
    <FlatList
      data={[
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ]}
      renderItem={({item,index}) => <Text style={[styles.item,{backgroundColor:colors[index%colors.length]}]}>{item.key}</Text>}
    />
  </View>

    );
  }
  
  export default Credits;

/*
const colorAr = [
  "#123456",
  "#654321"
]
const bgColor = (i) => colorAr[i % colorAr.length];

const ListItem = ({ item, index }) => {
  return (
    <View style={styles.skinCircles}></View>
  )
}
*/

/*

<View style={styles.container}>
<FlatList
  data={[
    {key: '#8D5524'},
    {key: '#C68642'},
    {key: '#E0AC69'},
    {key: '#F1C27D'},
    {key: '#FFDBAC'},
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
/>
</View>
*/

 

/*
renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
*/