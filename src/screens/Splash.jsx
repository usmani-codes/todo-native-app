import react, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Appearance,
  Dimensions,
} from 'react-native'
import CustomButton from '../components/CustomButton'
import Shapes from '../components/Shape'

const colorScheme = Appearance.getColorScheme()
const { width, height } = Dimensions.get('window')

const Splash = ({ navigation }) => {
  // console.log(colorScheme, width, height)

  const getStarted = () => {
    navigation.navigate('registration')
  }
  return (
    <View style={styles.container}>
      <Shapes />
      <View style={styles.main}>
        <Image source={require('../assests/home.png')} style={styles.mainImg} />

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.p,
              { fontSize: 20, fontWeight: 600, textAlign: 'center' },
            ]}
          >
            Get things done with ToDo
          </Text>
          <Text style={[styles.p, { marginTop: 10, fontSize: 14 }]}>
            welcome to todo where you can manage your daily task
          </Text>
        </View>
        <CustomButton text={'Get Started'} getStarted={getStarted} />
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    position: 'relative',
  },
  p: {
    color: 'black',
    fontFamily: 'Poppins',
  },

  main: {
    flex: 1,
    paddingTop: '45%',
    paddingBottom: 100,
    alignItems: 'center',
  },
  mainImg: {
    width: 176,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    marginHorizontal: 50,
    paddingRight: 20,
    alignItems: 'flex-start',
    marginTop: 40,
    marginBottom: 90,
  },
})
