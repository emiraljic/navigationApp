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

// warnings: list missing keys

  const LookWindow = () => {

      // useState for every part
  const [colorChange, setcolorChange] = useState("purple"); //bg
  const [colorInner, setcolorInner] = useState("white"); //inner corner
  const [colorOuter, setcolorOuter] = useState("black"); //outer corner
  

  const warmTones = [
    '#de0c1c','#fe2d2d','#fb7830','#fecf02','#ffdd47'
  ]
  
  const skinColors = [
    '#4b3932', '#3c2e28', '#593b2b',
    '#8D5524','#C68642','#E0AC69','#F1C27D','#FFDBAC'
  ]

    return(

        <View style={styles.container}>
      <View style={styles.image}>

      <View style={[styles.eyeTest, {backgroundColor: colorChange}]}>
          <Image
          style={styles.eyeImage}
          source={require('./assets/closed_test.png')}
        />
          <Image
          style={[styles.eyeImage2, {tintColor: colorInner}]}
          source={require('./assets/inner_test2.png')}
        />
        <Image
          style={[styles.eyeImage3, {tintColor: colorOuter}]}
          source={require('./assets/outer_test2.png')}
        />
        </View>

        <View style={styles.eyeTextCon}>
        <Text style={styles.eyeText}>Skin color</Text>
      </View>
      <View style={styles.circleContainer}>
      <View style={styles.colorcontainer}>
      <FlatList contentContainerStyle={styles.list} 
        data={skinColors}
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setcolorChange(item)}}
        style={[styles.item,{backgroundColor:skinColors[index%skinColors.length]}]}></TouchableOpacity>}
      />
    </View>
      </View>
      


      <View style={styles.eyeTextCon}>
        <Text style={styles.eyeText}>Outer corner</Text>
      </View>
      <View style={styles.circleContainer}>
      <View style={styles.colorcontainer}>
      <FlatList contentContainerStyle={styles.list}
        data={warmTones}
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setcolorOuter(item)}}
        style={[styles.item,{backgroundColor:warmTones[index%warmTones.length]}]}></TouchableOpacity>}
      />
    </View>
      </View>

      <View style={styles.eyeTextCon}>
        <Text style={styles.eyeText}>Inner corner</Text>
      </View>
      <View style={styles.circleContainer}>

      <View style={styles.colorcontainer}>
      <FlatList contentContainerStyle={styles.list}
        data={warmTones}
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setcolorInner(item)}} 
        style={[styles.item,{backgroundColor:warmTones[index%warmTones.length]}]}></TouchableOpacity>}
      />
    </View>
      </View>
    
      </View>
    </View>

    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 40,
    flexDirection: "column",

  }, image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

  }, homeText: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#666",
    padding: 20,
    borderRadius: 20,

  }, moveButtons: {
  marginTop: 50,

  }, eyeImage: {
    width: 300,
    height: 300,
    zIndex: 1,


  }, eyeTest: {
    backgroundColor: "#e0ac69",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,

  }, eyeImage2: {
    position: "absolute",
    width: 300,
    height: 300,
    zIndex: 2,
    tintColor: "orange",
 
  },  eyeImage3: {
    position: "absolute",
    width: 300,
    height: 300,
    zIndex: 3,
    tintColor: "red",

  }, circleColor: {
    width: 60,
    height: 60,
    backgroundColor: "purple",
    borderRadius: 100,
    marginLeft: 20,

  }, circleContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    padding: 20,

  }, eyeTextCon: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  

  }, eyeText: {
    fontSize: 20,
    

  }, colorcontainer: {
    flexDirection: "row",
    width: "100%",
 
   },
   item: {
     width: 60,
     height: 60,
     borderRadius: 100,
     margin: 10,
   }, 
   list: {   //warns: flex not supp, use numColumns
     justifyContent: 'center',
     flexDirection: 'row',
     flexWrap: 'wrap',
     //numColumns: 5,
     padding: 20,
   },
});

export default LookWindow;