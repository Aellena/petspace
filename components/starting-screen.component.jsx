import { Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const StartingScreen = ( { navigation } ) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to PetSpace!</Text>
      <StatusBar style='auto' />
      <Button
        title="Let's get started!"
        onPress={() =>
          navigation.navigate('Discover', { petName: 'Fido'})
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default StartingScreen
