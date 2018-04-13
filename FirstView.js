import React from 'react'
import { View, Animated, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default class extends React.Component {

  constructor() {
    super()
    this.state = {
      anim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.startAnimation()
  }

  startAnimation = () => {
    Animated.timing(this.state.anim, {
      duration: 5000,
      toValue: 1
    }).start()
  }


  render() {
    const borderWidth = this.state.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 0],
    })
    const opacity = this.state.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    })
    return (
      <Animated.View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', width, height, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent' }} >
        <Animated.View style={{ opacity, borderWidth, borderColor: 'white', width: 1000, height: 1000, borderRadius: 500, backgroundColor: 'red' }}></Animated.View>
      </Animated.View>
    )
  }
}
