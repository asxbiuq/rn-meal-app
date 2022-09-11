import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStackNavigator, FavoriteStackNavigator } from './StackNavigator'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const screenOptions = () => ({
  headerShown: false,
})

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='Categories'
        component={MainStackNavigator}
        options={{
          tabBarLabel: () => <Text style={{ fontSize: 5 }}>Meals</Text>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'restaurant'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteStackNavigator}
        options={{
          tabBarLabel: () => <Text style={{ fontSize: 5 }}>Favorite</Text>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'star'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
