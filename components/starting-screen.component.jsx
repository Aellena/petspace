import { Text, View , Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native-web'

const StartingScreen = ({ navigation }) => {
  const image = require('../assets/dog-and-owner-outdoors.jpeg')
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.text}>Welcome to PetSpace!</Text>
        <StatusBar style='auto' />
        <Button
          title="Let's get started!"
          onPress={() => navigation.navigate('Discover', { petName: 'Fido' })}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom: '75px',
    fontSize: '2em',
    color: 'white'
  },
})

export default StartingScreen
