
import React, { Component } from 'react';
import firebase from 'firebase';
import {Header, Button,Spinner,DataCardSection} from './components/common';
import LoginForm from './components/LoginForm';
// gdfadgsf
import {
  Text,
  View
} from 'react-native';
class App extends Component{
    state= {
        loggedIn:null,
    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyAawTSQq6ihqiIkL0rfsfYiwv9_c7ZTTso",
            authDomain: "authentication-2725c.firebaseapp.com",
            databaseURL: "https://authentication-2725c.firebaseio.com",
            projectId: "authentication-2725c",
            storageBucket: "authentication-2725c.appspot.com",
            messagingSenderId: "225678490019"
          });
          firebase.auth().onAuthStateChanged((user) =>{
                if(user){
                    this.setState({loggedIn:true});
                }else{
                    this.setState({loggedIn:false});
                }
          });
    }
    renderContent(){
        switch(this.state.loggedIn){
            case true:
            return (
                <DataCardSection>
                     <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                </DataCardSection>
            )
           case false:
            return  <LoginForm />;
            default:
            return <Spinner />;
        }
    }
    render(){
        return(
            <View>
              <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;