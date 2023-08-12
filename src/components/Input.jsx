import react, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { useRegisterContext } from '../feature/RegisterContext'

const Input = ({ placeholder, login, type }) => {
  const { users, setUsers } = useRegisterContext()

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    console.log('formData', formData)
    let id = Date.now().toString().substring(0, 10)
    const newUser = { ...formData, id }
    setTodos([...users, newUser])
    console.log(users)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange('title', value)}
        placeholder={placeholder}
        placeholderTextColor={'black'}
      />
    </View>
  )
}

export default Input
const styles = StyleSheet.create({
  inputWrapper: {
    width: 300,
  },
  input: {
    borderRadius: 100,
    backgroundColor: '#fff',
    color: '#000',
    paddingLeft: 30,
  },
})
