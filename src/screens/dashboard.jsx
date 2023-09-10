import react, { useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  useColorScheme,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  Dimensions,
} from 'react-native'
import Shapes from '../components/Shape'
import CheckBox from '../components/CheckBox'
import { useRegisterContext } from '../feature/RegisterContext'

const Dashboard = () => {
  const { todos, setTodos } = useRegisterContext()
  return (
    <View style={styles.container}>
      <Shapes />
      <View style={styles.nav}>
        <View style={styles.content}>
          <Image source={require('../assests/user.png')} />
          <Text style={styles.heading}>Welcome Ayodamope Bello</Text>
        </View>
      </View>

      <View style={styles.main}>
        <Text
          style={[
            styles.heading,
            {
              alignSelf: 'flex-end',
              fontWeight: 'bold',
              padding: 10,
              paddingBottom: 0,
            },
          ]}
        >
          Good Afternoon
        </Text>
        <View style={styles.clock}>
          <View style={styles.circle}></View>
          <View style={styles.arrow}>
            <View style={styles.arrow1}></View>
            <View style={styles.arrow2}></View>
            <View style={styles.arrow3}></View>
          </View>
          <View style={styles.clockHorizontal}>
            <View>
              <Text style={styles.digit}>9</Text>
            </View>
            <View>
              <Text style={styles.digit}>3</Text>
            </View>
          </View>
          <View style={styles.clockVertical}>
            <View>
              <Text style={styles.digit}>12</Text>
            </View>
            <View>
              <Text style={styles.digit}>6</Text>
            </View>
          </View>
        </View>

        {/* <Image
          source={require('../assests/clock.png')}
          style={styles.mainImg}
        /> */}

        {/* tasks */}
        <View style={styles.tasksContainer}>
          <Text style={[styles.heading, { fontWeight: 700, marginBottom: 20 }]}>
            Daily Tasks
          </Text>
          {todos.map(({ task, id }) => (
            <CheckBox task={task} key={id} />
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    position: 'relative',
  },
  nav: {
    backgroundColor: '#1DB2AD',
    width: '100%',
    height: 220,
    zIndex: -20,
    paddingBottom: 20,
  },
  content: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  p: {
    color: 'black',
    fontFamily: 'Poppins',
  },

  main: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  left: {
    alignSelf: 'flex-start',
    marginTop: -30,
    gap: 10,
    width: '100%',
  },
  mainImg: {
    width: 220,
    height: 220,
    marginTop: -10,
  },

  // tasks container
  tasksContainer: {
    paddingHorizontal: 10,
    width: '100%',
    height: '50%',
    marginBottom: 20,
    backgroundColor: 'rgba(106, 215, 215, 0.06)',
  },

  // clock

  clock: {
    marginVertical: 20,
    zIndex: 1,
    position: 'relative',
    backgroundColor: ' rgba(64, 234, 228, 0.28)',
    width: 200,
    height: 200,
    borderRadius: 150,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // box-shadow: 0 0 4rem -1rem #3f463b82,
  },

  digit: {
    color: '#000',
    fontSize: 22,
  },
  clockHorizontal: {
    marginVertical: '50%',
    height: 30,
    width: '100%',
    transform: [{ translateY: -20 }],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clockVertical: {
    position: 'absolute',
    top: 10,
    left: '50%',
    height: '100%',
    transform: [{ translateX: -5 }],
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: [{ translateX: 5 }],
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -3 }, { translateY: -5 }],
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: '#40EAE4',
    zIndex: 4,
  },

  arrow1: {
    backgroundColor: '#0B7A76',
    width: 6,
    height: 75,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transformOrigin: 'bottom',
    borderRadius: 100,
    transform: [{ rotate: '0deg' }],
    // borderRadius: ['50%', '50%', 0, 0],
  },
  arrow2: {
    backgroundColor: '#0B7A76',
    width: 5,
    height: 85,
    position: 'absolute',
    bottom: '50%',
    left: ' 50%',
    borderRadius: 100,
    transformOrigin: 'bottom',
    transform: [{ rotate: '0deg' }],

    // border-radius: 50% 50% 0 0,
  },
  arrow3: {
    backgroundColor: '#C4C4C4',
    width: 3,
    height: 115,
    position: 'absolute',
    bottom: -35,
    left: '50%',
    borderRadius: 100,
    transform: [{ rotate: '0deg' }],
  },
})

export default Dashboard
