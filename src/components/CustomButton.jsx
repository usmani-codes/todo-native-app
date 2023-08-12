import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CustomButton = ({
  text,
  handleRegister,
  handleLogin,
  getStarted,
  handleSend,
}) => {
  const handlePress = () => {
    if (handleRegister) handleRegister()
    if (handleLogin) handleLogin()
    if (getStarted) getStarted()
    if (handleSend) handleSend()
  }
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: '700',
          fontFamily: 'Poppins',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
export default CustomButton
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1DB2AD',
    width: '90%',
    height: 69,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
