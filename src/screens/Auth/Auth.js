import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
        <Button title="Switch Log In" onPress={this.loginHandler}/>
        <View style={styles.containerInput}>
          <DefaultInput placeholder='Your e-mail address' style={styles.input}/>
          <DefaultInput placeholder='Password' style={styles.input}/>
          <DefaultInput placeholder='Password confirmation' style={styles.input}/>
        </View>
        <Button title="Submit" onPress={this.loginHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    width: '80%'
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
