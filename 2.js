import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import ToastExample from './ToastExample';


export default class App extends React.Component{

  
  componentDidMount() {
    ToastExample.show('Awesome', ToastExample.SHORT);
  }

  
  render(){
    return(
      <View>
        <Text>od</Text>
      </View>
    );
  }
}