import { StyleSheet, Text, View } from 'react-native'
const Shapes = () => {
  return (
    <View>
      <View style={[styles.circle, styles.circle_1]}></View>
      <View style={[styles.circle, styles.circle_2]}></View>
    </View>
  )
}
export default Shapes
const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 128,
    height: 128,
    borderRadius: 100,
    backgroundColor: 'rgba(143, 225, 215, 0.44);',
  },
  circle_1: {
    top: -10,
    left: -60,
    // zIndex: 500,
  },
  circle_2: {
    top: -60,
    left: 0,
    // zIndex: 500,
  },
})
