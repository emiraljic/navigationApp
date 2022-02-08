import React from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

  const OptionsPage = () => {
  
    return(

      <LinearGradient colors={['rgba(225,225,225,0.8)', 'transparent']} style={styles.container} >

        <Text style={{ fontFamily: 'Tahu', fontSize: 50}}>
            Options
        </Text>

        <Text style={styles.text}>
          Your current device is {Platform.OS}.
        </Text>
        </LinearGradient>

    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({                //platform based conditional rendering 
      ios: {
        backgroundColor: 'lightgrey'
      },
      android: {
        backgroundColor: 'grey'
      },
      default: {
        backgroundColor: 'white'
      }
    })
  }, 
  text: {
      color: "#333",
      padding: 20,
      fontWeight: 'bold',
  }
});

export default OptionsPage;