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
import Input from '../components/Input'
import CustomButton from '../components/CustomButton'
import { useRegisterContext } from '../feature/RegisterContext'

const Registration = ({ navigation }) => {
  const [formData, setFormData] = useState({})
  const { users, setUsers } = useRegisterContext()

  const INPUTS = [
    {
      id: 1,
      name: 'fullName',
      placeholder: 'Enter Your Full Name',
    },
    {
      id: 2,
      name: 'email',
      placeholder: 'Enter Your Email',
    },
    {
      id: 3,
      name: 'password',
      placeholder: 'Enter Password',
    },
    {
      id: 4,
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
    },
  ]

  useEffect(() => {
    navigation.addListener('blur', () => setFormData({}))
    navigation.addListener('focus', () => console.log('screen In'))
  }, [navigation])

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const { fullName, email, password, confirmPassword } = formData
  const handleRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      return Alert.alert('please fill all fields')
    }
    let id = Date.now().toString().substring(0, 10)
    const newUser = { ...formData, id }
    console.log(newUser, 'new User')
    setUsers([...users, newUser])
    navigation.navigate('login')
  }

  return (
    <View style={styles.container}>
      <Shapes />
      <View style={styles.main}>
        <Text style={styles.heading}>Welcome On Board</Text>
        <Text style={[styles.p]}>Lets hope you meet your task</Text>
        <View style={styles.inputContainer}>
          {INPUTS.map(({ id, name, placeholder }) => (
            <View style={styles.inputWrapper} key={id}>
              <TextInput
                style={styles.input}
                onChangeText={(value) => handleChange(name, value)}
                placeholder={placeholder}
                placeholderTextColor={'black'}
                secureTextEntry={name === 'password' ? true : false}
              />
            </View>
          ))}
        </View>
        <CustomButton text='Register' handleRegister={handleRegister} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}
        >
          <Text style={[styles.p, styles.p_account]}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.singIn}>Sing In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Registration

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
    paddingTop: '45%',
    paddingBottom: 100,
    alignItems: 'center',
    borderBlockColor: 'yellow',
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
    marginBottom: 90,
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
