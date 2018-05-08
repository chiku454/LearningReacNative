import React, {Component} from 'react';
import { Text, Image, View, Linking } from 'react-native';
import DataCard from './DataCard'
import DataCardSection from './DataCardSection'
import Button from './Button'

const AlbumDetail = ({album}) =>{
    const {title,artist,thumbnail_image,image,url}=album;
    const {
        thumbnailContainerStyle,
        thumbnailStyle,imageStyle,
        headerContentStyle,headerTextStyle
    }=styles;
    return(
        <DataCard>
            <DataCardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{uri: thumbnail_image}} 
                    />      
                 </View> 
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text >{artist}</Text>
                </View>
            </DataCardSection>
           <DataCardSection>
           <Image 
                    style={imageStyle}
                    source={{uri: image}} 
                    />  
          </DataCardSection>
          <DataCardSection>
            <Button onPress={()=>Linking.openURL(url)}>
                Buy Now
            </Button>
          </DataCardSection>
        </DataCard>
    );

}
const styles={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50,
        borderRadius:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center' ,
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        width:null,
        flex:1
    }

}
export default AlbumDetail;