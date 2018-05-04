// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('myApp', () => App);
import React from 'react';
import { Text, AppRegistry, View, StyleSheet} from 'react-native'; 
import Header from './src/components/header'

const App = () => 
   (
       <View style={styles.container}>
            <Header /> 
         </View>
    );
    const styles = StyleSheet.create({
        container: {    
          // backgroundColor: '#F5FCFF',
        },
        // welcome: {
        //   fontSize: 20,
        //   textAlign: 'center',
        //   margin: 10,
        // },
        // instructions: {
        //   textAlign: 'center',
        //   color: '#333333',
        //   marginBottom: 5,
        // },
      });
      
  AppRegistry.registerComponent('myApp', () => App);