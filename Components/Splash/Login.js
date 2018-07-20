import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, StatusBar, TextInput, Keyboard } from 'react-native';
import {BudsyButton} from '../Common'
import request from 'superagent'

export class Login extends React.Component{
  state = {
    email: '',
    password: ''
  }
  userValidation = (email, password) => {

    //validate email
    //incorporate authentication
    return email !== '' && password !== ''
  }

  loginUser = () => {
    const {email, password} = this.state
    const {navigation} = this.props
    if(this.userValidation(email,password)) {
      //send out request and wait for a successful promise
      navigation.navigate('Home')
    }
    //error handle
  }

  render(){
    const {email, password} = this.state
    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={styles.keyboardDismissContainer}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={styles.slogan}>Login to your account</Text>

            <View style={styles.buttonContainer} >
              <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  autoCapitalize='none'
                  value={this.state.email}
                  onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize='none'
                    value={this.state.username}
                    onChangeText={(password) => this.setState({password})}
                  />
              <BudsyButton filled invalid={!this.userValidation(email, password)} text="Login" onPress={this.loginUser} />
              <Text>Don't have an accout? Sign up</Text>
              <Text>Forgot your password?</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10%',
    paddingBottom: '10%',
    flex: 1
  },
  logo : {
    width: 100,
    height: 100
  },
  slogan: {
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textInput: {
    width: '100%',
    height: 40,
    textAlign: 'center',
    borderColor: '#d7d9db',
    borderWidth: 1,
    margin: 5
  },
  keyboardDismissContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20
  }
});
