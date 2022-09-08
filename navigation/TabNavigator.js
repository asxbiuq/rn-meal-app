import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, FavoriteStackNavigator } from "./StackNavigator";
// import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  // tabBarIcon: ({ focused, color, size }) => {
  //   if (route.name === 'Meals') {
  //     return (
  //       <Ionicons
  //         name={'ios-restaurant'}
  //         size={size}
  //         color={color}
  //       />
  //     );
  //   } else if (route.name === 'Favorites') {
  //     return (
  //       <Ionicons
  //         name={'ios-star'}
  //         size={size}
  //         color={color}
  //       />
  //     );
  //   }
  // },
  tabBarInactiveTintColor: 'gray',
  tabBarActiveTintColor: 'tomato',
})

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator  
      screenOptions={screenOptions} 
    >
      <Tab.Screen name="Categories" component={MainStackNavigator} />
      <Tab.Screen name="Favorite" component={FavoriteStackNavigator} />
    </Tab.Navigator>
  );
};



export default BottomTabNavigator;