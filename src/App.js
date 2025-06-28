import React from "react";
import { View, Text } from "react-native";
import ToDoCard from "./components/ToDoCard/ToDoCard";

function App (){
  return (
    <View>
      <Text>App</Text>
      <ToDoCard />
    </View>
  );
};

export default App;