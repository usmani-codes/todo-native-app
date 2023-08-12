import react, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  useColorScheme,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'
import Shapes from '../components/Shape'
import CustomButton from '../components/CustomButton'

const ForgetPassword = ({ navigation }) => {
  const [formData, setFormData] = useState()
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }
  const handleSend = () => {
    console.log('an resetlink sent to your email')
    navigation.navigate('login')
  }

  return (
    <View style={styles.container}>
      <Shapes />
      <View style={styles.main}>
        <Text style={styles.heading}>Forget Password</Text>
        <View style={styles.inputWrapper} key={33}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChange(value)}
            placeholder={'Enter Your Email'}
            placeholderTextColor={'black'}
          />
        </View>
        <CustomButton text={'Send'} handleSend={handleSend} />
      </View>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    color: '#000',
    position: 'relative',
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
    gap: 40,
    paddingTop: '75%',
    // paddingTop: 250,
    alignItems: 'center',
    borderBlockColor: 'yellow',
  },
  loginImg: {
    width: '80%',
    marginTop: 20,
    marginBottom: 40,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 22,
    fontFamily: 'Poppins',
  },
  p_account: {
    marginTop: 15,
  },
  singIn: {
    color: '#1DB2AD',
    fontWeight: '700',
    alignSelf: 'flex-end',
  },
  heading: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textShadowColor: '#000',
    textShadowOffset: { width: 10, height: 10 },
  },
  inputContainer: {
    gap: 22,
    marginBottom: 60,
  },
  // input style

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
