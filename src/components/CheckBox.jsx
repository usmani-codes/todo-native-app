import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

const CheckBox = ({ task }) => {
  console.log(task, 'task')
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={styles.box}>
        <View
          style={{
            width: 22,
            height: 22,
            backgroundColor: isChecked ? '#0B7A76' : 'white',
          }}
        ></View>
        <Text style={[styles.heading, { fontWeight: 300, color: 'black' }]}>
          {task}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 10,
      height: 10,
    },
  },
})

export default CheckBox
