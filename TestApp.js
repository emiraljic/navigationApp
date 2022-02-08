import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { useState } from "react";


  const warmTones = [
    '#de0c1c','#fe2d2d','#fb7830','#fecf02','#ffdd47'
  ]

  const skinColors = [
    '#4b3932', '#3c2e28', '#593b2b',
    '#8D5524','#C68642','#E0AC69','#F1C27D','#FFDBAC'
  ]



export default function TestApp() {

    const [colorChange, setcolorChange] = useState("pink"); //bg
    const [skinChange, setskinChange] = useState("red"); //bg

    

  return (
    <View style={styles.container}>
      <View style={[styles.eyeTest, {backgroundColor: skinChange}]}>
          <Image
          style={styles.eyeImage}
          source={require('./assets/closed_test.png')}
        />
          <Image
          style={[styles.eyeImage2, {tintColor: colorChange}]}
          source={require('./assets/inner_test2.png')}
        />
        <Image
          style={[styles.eyeImage3, {tintColor: colorChange}]}
          source={require('./assets/outer_test2.png')}
        />
        </View>

 <FlatList contentContainerStyle={styles.list}
        data={warmTones}
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setcolorChange(item)}}
        style={[styles.item,{backgroundColor:warmTones[index%warmTones.length]}]}></TouchableOpacity>}
      />

       <FlatList contentContainerStyle={styles.list}
        data={skinColors}
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setskinChange(item)}}
        style={[styles.item,{backgroundColor:skinColors[index%skinColors.length]}]}></TouchableOpacity>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },  list: {   //warns: flex not supp, use numColumns
     justifyContent: 'center',
     flexDirection: 'row',
     flexWrap: 'wrap',
     padding: 20,
   },    item: {
     width: 60,
     height: 60,
     borderRadius: 100,
     margin: 10,
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
 
  },  eyeImage3: {
    position: "absolute",
    width: 300,
    height: 300,
    zIndex: 3,
    },
});