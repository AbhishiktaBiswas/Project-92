import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ReadRecipeScreen from "./screens/ReadRecipe";
import WriteRecipeScreen from "./screens/WriteRecipe";

const Stack=createStackNavigator();
function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown:false
    }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="ReadRecipe" component={ReadRecipeScreen}/>
    <Stack.Screen name="WriteRecipe" component={WriteRecipeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App