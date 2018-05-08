 import React, {Component} from 'react';
 import { View, Text, Image } from 'react-native';
//  export default class Header extends Component {
//    constructor(props){
//      super(props);
//    }
//     render() {
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//           };
const Header =(props) =>{
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>
            {props.headerText}
          </Text>
        </View>
      );
    }

 
 const styles ={
    viewStyle:{
        backgroundColor:'#F8F8F8',  
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        shadowColor:'#FFFFFF',
        shadowOffset:{width:0,heigth:2},
        shadowOpacity:0.9,
    },
    textStyle:{
        fontSize:20,
    },
 };
export default Header;