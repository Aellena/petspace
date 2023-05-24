import { Text } from 'react-native'

const DiscoverComponent = ( { navigation, route } ) => {
  return (
    <Text>Discover friends for {route.params.petName}</Text>
  )
}

export default DiscoverComponent