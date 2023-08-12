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
        <Image
          source={require('../assests/clock.png')}
          style={styles.mainImg}
        />

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

export default Dashboard

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
})
