import { StatusBar } from "expo-status-bar";
import React, { cloneElement, useEffect } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  FlatList,
  Pressable
} from "react-native";

import { useState } from "react"; //
import { Touchable, TouchableOpacity } from "react-native-web";


const colors= [
  '#8D5524','#C68642','#E0AC69','#F1C27D','#FFDBAC'
]


//Props - Pass information, arguments, temp names, property

// Function - () = Parameter == EMPTY
const myArrow = (nameInput) => {
  console.log("Hello.");
  console.log(nameInput);
}

myArrow("Hi");


const SkinColor = () => {

  const [color, setColor]= useState("#FFDBAC");

  function colorHex(props)
  {
    return(
      <Text>YO.</Text>
    )
  }



  return (
    <View style={styles.container}>
    <FlatList contentContainerStyle={styles.list}
      data={[
        {key: '#8D5524'},
        {key: '#C68642'},
        {key: '#E0AC69'},
        {key: '#F1C27D'},
        {key: '#FFDBAC'},
      ]}
      renderItem={({item,index}) => 
      <TouchableOpacity onPress={console.log(item.key)} //egentligen pnPress/onClick setColor(item.key)
      style={[styles.item,{backgroundColor:colors[index%colors.length]}]}></TouchableOpacity>}
    />
  </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
     backgroundColor: "white",
     flexDirection: "row",
     width: "100%",
  
    },
    item: {
      fontSize: 0,
      width: 60,
      height: 60,
      borderRadius: 100,
      margin: 10,
    }, 
    list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 20,
    }
  });

  export default SkinColor;
