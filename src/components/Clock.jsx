import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'

const Clock = () => {
  const [currentHour, setCurrentHour] = useState(0)
  const [currentMinute, setCurrentMinute] = useState(0)
  const [currentSecond, setCurrentSecond] = useState(0)

  const rotateHour = new Animated.Value(0)
  const rotateMinute = new Animated.Value(0)
  const rotateSecond = new Animated.Value(0)

  const updateClockHands = () => {
    const now = new Date()
    const hours = now.getHours() % 12
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    setCurrentHour(hours)
    setCurrentMinute(minutes)
    setCurrentSecond(seconds)
  }

  useEffect(() => {
    const interval = setInterval(updateClockHands, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const hourRotation = currentHour * 30 + currentMinute * 0.5
    const minuteRotation = currentMinute * 6
    const secondRotation = currentSecond * 6

    Animated.timing(rotateHour, {
      toValue: hourRotation,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()

    Animated.timing(rotateMinute, {
      toValue: minuteRotation,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()

    Animated.timing(rotateSecond, {
      toValue: secondRotation,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }, [currentHour, currentMinute, currentSecond])

  const hourRotation = rotateHour.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  })

  const minuteRotation = rotateMinute.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  })

  const secondRotation = rotateSecond.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.clockContainer}>
      <View style={styles.clockFace}>
        <Animated.View
          style={[
            styles.hand,
            styles.hourHand,
            { transform: [{ rotate: hourRotation }] },
          ]}
        />
        <Animated.View
          style={[
            styles.hand,
            styles.minuteHand,
            { transform: [{ rotate: minuteRotation }] },
          ]}
        />
        <Animated.View
          style={[
            styles.hand,
            styles.secondHand,
            { transform: [{ rotate: secondRotation }] },
          ]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  clockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockFace: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hand: {
    position: 'absolute',
    width: 1,
    backgroundColor: 'black',
    top: 100,
    height: 60,
    alignSelf: 'center',
    transformOrigin: 'bottom center',
  },
  hourHand: {
    height: 40,
  },
  minuteHand: {
    height: 50,
  },
  secondHand: {
    height: 60,
    backgroundColor: 'red',
  },
})

export default Clock
