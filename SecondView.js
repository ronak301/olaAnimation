import React from 'react'
import { View, Animated, Dimensions, Image, Easing } from 'react-native'
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
      duration: 500,
      toValue: 1,
      easing: Easing.elastic(0.04),
    }).start()
  }

  render() {
    const borderWidth = this.state.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [480, 50]
    })
    const wid = 1000
    return (
      <Animated.View style={{
        position: 'absolute',  
        alignItems: 'center', 
        justifyContent: 'center',
        width, 
        height,
        backgroundColor: 'transparent'
      }} >
        <Animated.View 
          style={{  
            position: 'absolute',
            width: wid, 
            height: wid,
            borderRadius: wid / 2, 
            borderColor: 'white',
            borderWidth,
            backgroundColor: 'transparent' 
          }} 
        />
      </Animated.View>
    )
  }
}
