import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView, Alert, Pressable, Modal} from 'react-native';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


  const colorPallette = [
    '#4e0707','#800000','#de0c1c','#fe2d2d',    //reds
    '#dd571c', '#ed7014','#fb7830', '#fda172',              //orange
    '#ffc30b','#fecf02','#ffdd47', '#feeb75',    //yellows
    '#808000', '#008000', '#043927', '#3DB489', //greens
    '#48aaad', '#016064', '#52b2bf', '#82eefd', //teals
    '#97c0ee','#6e91f0', '#0492c2', '#241571', //blues
    '#311432', '#663046' ,'#a691ec', '#dea0f4', '#9e7bb5', //purples
    '#fd55da', '#f26b8a', '#fe7f9c', '#fda4ba' ,'#f6c0f6', //pinks
  ]

  const skinColors = [
    '#2d221e','#3c2e28', '#4b3932' , '#593b2b', '#503335', '#592f2a', //dark
    '#8D5524', '#a1665e', '#a57e6e' , '#b48a78' , '#C68642','#E0AC69',  // medium
    '#d1a3a4','#F1C27D','#ecbcb4','#FFDBAC', '#FFC3AA', '#FFceb4'  // light
  ]



export default function LookComponent() {

    //useState color values
    const [colorOuter, setcolorOuter] = useState("white"); 
    const [colorInner, setcolorInner] = useState("white"); 
    const [skinChange, setskinChange] = useState("lightgrey"); 
    const [heartColor, setheartColor] = useState("#999");

    //useState modal
    const [modalVisible, setModalVisible] = useState(false);

    //useState loading screen
    const [isLoading, setIsLoading] = useState(true);

    //useState asyncStorage save
    const [counter, setCounter] = useState(0);
    const [look, setLook] = useState(""); //name
    const [lookInfo, setLookInfo] = useState(); 

    const getData = async () => {
      //multiget
      const values = await AsyncStorage.multiGet(['@counter', '@lookInfo']);

      values.forEach(value => {
        if(value[0] === '@counter') {
          const count = parseInt(value[1]);
          setCounter(isNaN(count) ? 0 : count);
        } else if (value[0] === '@lookInfo') {
          setLookInfo(JSON.parse(value[1]));
        }
      });

      setIsLoading(false);
    };

    //loading screen
    React.useEffect(getData);

    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <Text>Loading ... </Text>
        </View>
      );
    }

    const saveLook = async () => {
      const lookToSave = {
        look: look, 
        colorOuter: colorOuter
      };

      await AsyncStorage.setItem('@look', JSON.stringify(lookToSave));
      setLookInfo(lookToSave);  //save
      setheartColor("red");     //make heart red
      setModalVisible(!modalVisible); //close modal
    }

  return (
    
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Save look as:
              </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Name your look.."
                      onChangeText={setLook}
                      value={look}
                    />
                    <View style={styles.modalRow}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={saveLook}
              >
                <Text style={styles.textStyle}>
                  Save
                </Text>
              </Pressable>
            </View>
        </View>
    </View>
  </Modal>
</View>


   
      <View style={[styles.eyeTest, {backgroundColor: skinChange}]}>
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
        <TouchableOpacity style={styles.hButton} onPress={() => setModalVisible(true)}>
        <Image
          style={[styles.heart, {tintColor: heartColor}]}
          source={require('./assets/heart.png')}
        />
        </TouchableOpacity>
        
        </View>
        <Text style={styles.lookName}>
          {look}
        </Text>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Inner corner</Text>
          <FlatList contentContainerStyle={styles.list}
        data={colorPallette}
        horizontal
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setcolorInner(item)}}
        style={[styles.item,{backgroundColor:colorPallette[index%colorPallette.length]}]}></TouchableOpacity>}
        keyExtractor={(item, index) => index.toString()}
      />
        <Text style={styles.title}>Outer corner</Text>
          <FlatList contentContainerStyle={styles.list}
        data={colorPallette}
        horizontal
        
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setcolorOuter(item)}}
        style={[styles.item,{backgroundColor:colorPallette[index%colorPallette.length]}]}></TouchableOpacity>}
        keyExtractor={(item, index) => index.toString()}
      />
              <Text style={styles.title}>Skin color</Text>
               <FlatList contentContainerStyle={styles.list}
        data={skinColors}
        horizontal
        renderItem={({item,index}) => 
        <TouchableOpacity onPress={()=>{setskinChange(item)}}
        style={[styles.item,{backgroundColor:skinColors[index%skinColors.length]}]}></TouchableOpacity>}
        keyExtractor={(item, index) => index.toString()}
      /> 
    </ScrollView>
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  list: {   
     padding: 20,
   },
   item: {
     width: 60,
     height: 60,
     borderRadius: 100,
     margin: 10,
   }, 
   eyeImage: {
    width: 300,
    height: 300,
    zIndex: 1,
    tintColor: '#222',

  }, 
  eyeTest: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,

  }, 
  eyeImage2: {
    position: "absolute",
    width: 300,
    height: 300,
    zIndex: 2,
 
  },  
  eyeImage3: {
    position: "absolute",
    width: 300,
    height: 300,
    zIndex: 3,
    }, 
    title: {
      fontSize: 16,
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontFamily: "monospace",
      color: "#666",
      padding: 10,

  }, scrollView: {
    backgroundColor: 'rgba(225,225,225, 0.8)',
    height: "100%",
    borderRadius: 20,
    padding: 0,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 0,
  },
  heart: {
    height: 40,
    width: 47,
    marginTop: 230,
    marginLeft: 230,
    tintColor: "#999",

  },
  hButton: {
    position: "absolute",
    zIndex: 4,
  }, centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
    },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    button: {
    borderRadius: 10,
    padding: 10,
    margin: 20,
    elevation: 2,
    flexDirection: 'row',
    backgroundColor: 'red',
    },
    buttonOpen: {
    backgroundColor: "#F194FF",
    },
    buttonClose: {
    backgroundColor: "#2196F3",
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },
    modalText: {
    fontFamily: 'Tahu',
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center"
    }, lookName: {
      color: "#666",
      fontFamily: 'monospace',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 5,
      
    }, modalRow: {
      flexDirection: 'row',
      paddingTop: 20,
    },
    input: {
      fontFamily: 'monospace',
      fontSize: 12,
      padding: 20,
      backgroundColor: 'rgba(225,225,225, 0.8)',
      borderRadius: 10,
    },
});