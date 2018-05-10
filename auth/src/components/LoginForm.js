import React, { Component } from 'react';
import { Text } from'react-native'
import firebase from 'firebase';
  import { Button, DataCard, DataCardSection,Input, Spinner} from './common'
class LoginForm extends Component{
    state={
        email:"test@gmail.com",
        password:"manish92",
        error:"",
        loading:false
    };
    onButtonPress(){
        const {email ,password }=this.state;
        this.setState({error:"" ,loading:true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSucess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSucess.bind(this))
            .catch(this.onLoginFail.bind(this))
        });
    }
    onLoginFail(){
        this.setState({
            loading:false,
            error:'Authentication Failed....'
        });
    }
    onLoginSucess(){
        this.setState({
            email:'',
            password:'', 
            loading:false,
            error:''
        });
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size={'small'}/>;
        }
        return(
                <Button onPress={this.onButtonPress.bind(this)}>
                 Log in
                </Button>
        );
    }
    render(){
        return(
            <DataCard>
                <DataCardSection >
                        <Input
                        label={'Email'}
                        placeholder={'user@gmail.com'}
                        value={this.state.email}  
                        onChangeText={(email) => this.setState({email})}
                        />
                 </DataCardSection>
                <DataCardSection>
                <Input
                        label={'Password'}
                        placeholder={'password'}
                        secureTextEntry={true}
                        value={this.state.password} 
                        onChangeText={(password) => this.setState({password})}
                        />
                </DataCardSection >
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <DataCardSection>
                     {this.renderButton()}
                </DataCardSection>
            </DataCard>
        )
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}
export default LoginForm;