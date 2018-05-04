 import React, {Component} from 'react';
 import { View, Text, Image } from 'react-native';

 export default class Header extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>
            ALBUMS
          </Text>
        </View>
      );
    }
  }
 const styles ={
    viewStyle:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:'relative',
        top:10
    },
    textStyle:{
        fontSize:30,
        backgroundColor:'#F8F8F8',
       
    },
 
 };
