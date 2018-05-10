import React, {Component} from 'react';
import { View ,TextInput, Text} from 'react-native';

const Input =({label, value, onChangeText, placeholder,secureTextEntry}) =>{
    const { lableStyle, inputStyle, containerStyle}=styles;
    return(
        <View style={containerStyle}> 
            <Text style={lableStyle}>{label}</Text>
            <TextInput
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={inputStyle}
            onChangeText={onChangeText}
            value={value} 
            />
        </View>
    )
};
const styles={
    lableStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
}
export { Input };