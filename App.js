import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, Modal, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LookComponent from './LookComponent';
import { ThemeContext, ThemeProvider } from './util/ThemeManager';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// Light/Dark theme button
const ToggleButton = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <Button
    title= "light/dark"
    color= "#111"
    onPress={ () => toggleTheme() }
    />
  )
};


function HomeScreen({ navigation }) {

  const [bgColor, setbgColor] = useState("#999"); //bg
  const { theme } = React.useContext(ThemeContext);

  React.useLayoutEffect( () => {
    navigation.setOptions({
      headerRight: () => (
        <ToggleButton></ToggleButton>
      ),
  
    });
  }, [navigation]);

  // Load custom fonts

        const [loaded] = useFonts({
        
          Tahu: require('./assets/fonts/Tahu.ttf'),
          Abuget: require('./assets/fonts/Abuget.ttf'),
        });
  
        if (!loaded) {
          return null;
        }
  

  return (
    
    <LinearGradient colors={['rgba(100,100,100,0.5)', 'transparent']} style={[styles.container, styles[`container${theme}`]]} >
      <View style={styles.topView}>
      <Image
          style={styles.eyeImage}
          source={require('./assets/sketch_eye.png')}
        />
       <Text style={styles.homeText}>Eye make-up tester</Text>
       <Text style={styles.sloganText}>Give color to your ideas</Text>
       </View>

       
      <View style={styles.buttons}>
        <View style={styles.moveButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text style={styles.textButton}>New look</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.moveButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
        <Text style={styles.textButton}>Saved looks</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.moveButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("Credits")}>
        <Text style={styles.textButton}>Options</Text>
        </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
    
      

  );
}

function AboutScreen({ navigation })
{
  const [bgColor, setbgColor] = useState("#999"); //bg
  const { theme } = React.useContext(ThemeContext);

React.useLayoutEffect( () => {
  navigation.setOptions({
    headerRight: () => (
      <ToggleButton></ToggleButton>
    ),

  });
}, [navigation]);

/*
  <View style={[styles.eyeTest, {backgroundColor: color}]}/>
  <View style={[styles.container, styles.containerdark]}>
  
*/
  return ( 

      <LinearGradient colors={['rgba(100,100,100,0.5)', 'transparent']} style={[styles.container, styles[`container${theme}`]]} >
        <LookComponent></LookComponent>
      </LinearGradient>

  );
}

function SavedScreen({ navigation })
{
  const [bgColor, setbgColor] = useState("#999"); //bg
  const { theme } = React.useContext(ThemeContext);

React.useLayoutEffect( () => {
  navigation.setOptions({
    headerRight: () => (
      <ToggleButton></ToggleButton>
    ),

  });
}, [navigation]);

  return ( 

      <LinearGradient colors={['rgba(100,100,100,0.5)', 'transparent']} style={[styles.container, styles[`container${theme}`]]} >
        <View style={styles.container}>
          <Text style={styles.textSaved}>
            Saved looks
          </Text>
          <Text>
            This feature is under development.
          </Text>
        </View>
      </LinearGradient>

  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Make-up App", headerStyle: { backgroundColor: "#111", }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold", fontFamily: "monospace" }, }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ title: "Edit look", headerStyle: { backgroundColor: "#111", }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold", fontFamily: "monospace" }, }} />
        <Stack.Screen name="Saved" component={SavedScreen} options={{ title: "Saved looks", headerStyle: { backgroundColor: "#111", }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold", fontFamily: "monospace" }, }} />
        <Stack.Screen name="Credits" getComponent={ () => require("./OptionsPage").default} options={{ title: "Options", headerStyle: { backgroundColor: "#111", }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold", fontFamily: 'monospace'}, }} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

  }, 
  containerlight: {
    backgroundColor: "#f5f5f5",

  },
  containerdark: {
    backgroundColor: "#212121",

  },
  buttons: {
    flexDirection: "column",
    alignItems: 'center',

  }, textButton: {
    fontFamily: 'Tahu',
    fontSize: 30,
    color: '#666',

  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

  }, 
  homeText: {
    color: '#666',
    fontSize: 60,
    padding: 20,
    borderRadius: 20,
    fontFamily: "Abuget",
    marginTop: 0,

  }, 
  sloganText: {

    fontFamily: 'monospace',
    fontSize: 14,
  },
  moveButtons: {

  marginTop: 30,
  backgroundColor: 'rgba(225,225,225, 0.8)',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  borderRadius: 30,

  }, 
  eyeImage: {

    width: 208,
    height: 170,
    tintColor: '#666',
    zIndex: 1,

  }, 
  topView: {

    alignItems: 'center',
    backgroundColor: 'rgba(225,225,225, 0.8)',
    padding: 30,
    borderRadius: 50,
    

  }, textSaved: {
    
    fontFamily: 'Tahu',
    fontSize: 50,
  }
});
