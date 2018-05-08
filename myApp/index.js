// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('myApp', () => App);
import React from 'react';
import { Text, AppRegistry, View, StyleSheet} from 'react-native'; 
import Header from './src/components/header'
import AlbumsList from './src/components/albumsList'

const App = () => 
   (
       <View style={styles.container}>
            <Header headerText='ALBUMS'/> 
            <AlbumsList/>
         </View>
    );
    const styles ={
        container: {    
          backgroundColor: 'white',
          flex:1
          // color: '#333333',
        },
        // welcome: {
        //   fontSize: 20,
        //   textAlign: 'center',
        //   margin: 10,
        // },
        // instructions: {
        //   textAlign: 'center',
        //  
        //   marginBottom: 5,
        // },
      }
      
  AppRegistry.registerComponent('myApp', () => App);