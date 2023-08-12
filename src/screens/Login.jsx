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
  Alert,
} from 'react-native'

import Shapes from '../components/Shape'
import CustomButton from '../components/CustomButton'
import { useRegisterContext } from '../feature/RegisterContext'

const Login = ({ navigation }) => {
  const { users, setUsers } = useRegisterContext()
  const [formData, setFormData] = useState({})

  const INPUTS = [
    {
      id: 1,
      name: 'email',
      placeholder: 'Enter Your Email',
    },
    {
      id: 2,
      name: 'password',
      placeholder: 'Enter Your Password',
    },
  ]

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = () => {
    const { email, password } = formData
    if (!email || !password) {
      return Alert.alert('please fill all the Fields')
    }

    const registeredUser = users.find((user) => {
      if (!user.email === email || !user.password === password) {
        return Alert.alert('email or password not matched ')
      } else {
        return user.email === email && user.password === password
      }
    })
    if (registeredUser) {
      console.log('registered true', users)
      navigation.navigate('dashboard')
    }
  }
  return (
    <View style={styles.container}>
      <Shapes />
      <View style={styles.main}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Image
          source={require('../assests/login.png')}
          style={styles.loginImg}
        />

        <View style={styles.inputContainer}>
          {INPUTS.map(({ id, name, placeholder }) => (
            <View style={styles.inputWrapper} key={id}>
              <TextInput
                style={styles.input}
                onChangeText={(value) => handleChange(name, value)}
                placeholder={placeholder}
                placeholderTextColor={'black'}
              />
            </View>
          ))}
          <TouchableOpacity
            onPress={() => navigation.navigate('forgetPassword')}
          >
            <Text
              style={{ color: '#1DB2AD', textAlign: 'center', marginTop: -15 }}
            >
              Forget password ?
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton text='Log in' handleLogin={handleLogin} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}
        >
          <Text style={[styles.p, styles.p_account]}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('registration')}>
            <Text style={styles.singIn}>Sing Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

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
    paddingTop: '35%',
    paddingBottom: 100,
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
