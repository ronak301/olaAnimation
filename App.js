/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native'
import FirstView from './FirstView'
import SecondView from './SecondView'

const { width, height } = Dimensions.get('window')

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      isReady: false
    }
  }
  render() {
    const { isReady } = this.state
      return (
        <View style={styles.container}>
          <Image source={require('./ola.jpg')} style={{ opacity: isReady ? 1 : 0,width, height }} />
          <FirstView onComplete={this.onComplete} />
          {!!isReady && <SecondView />}
        </View>
      );
  }

  onComplete = () => {
    this.setState({
      isReady: true
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
