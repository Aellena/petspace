import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StartingScreen from './components/starting-screen.component'
import DiscoverComponent from './components/discover.component'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={StartingScreen}
          option={{title: 'Welcome to PetSpace'}}
        />
        <Stack.Screen name='Discover' component={DiscoverComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
