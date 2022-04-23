import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/homebg.png")}                     style={styles.backgroundImage}>
               
                <TouchableOpacity style={styles.card} onPress={()=>
                this.props.navigation.navigate("ReadRecipe")}>
                <Text style={styles.recipeText}>Read Recipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={()=>
                this.props.navigation.navigate("WriteRecipe")}>
                <Text style={styles.recipeText}>Write Recipe</Text>
                </TouchableOpacity>
                 </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0
  },
  backgroundImage:{
    flex:1,
    resizeMode:"cover"
  },
  card:{
    flex:0.15,
    marginLeft:50,
    marginRight:50,
    marginTop:30,
    borderRadius:30,
    backgroundColor:"white"
  },
  recipeText:{
    fontSize:20,
    fontWeight:"bold",
    color:"black",
    marginTop:20,
    paddingLeft:50
  }


})
