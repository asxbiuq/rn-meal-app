// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CategoriesScreen from './screens/CategoriesScreen';
// import CategoryMealScreen from './screens/CategoryMealScreen';
// import MealDetailScreen from './screens/MealDetailScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FavoritesScreen from './screens/FavoritesScreen';
// import { Ionicons } from '@expo/vector-icons';
// import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator 
//         screenOptions={
//           tabScreenOptionsConfig
//         }
//       >
//           <Tab.Screen name="Meals" component={MealNav} options={{headerShown: false}}/>
//           <Tab.Screen name="Favorites" component={FavoritesScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// const Meal = createNativeStackNavigator();

// function MealNav() {
//   return (
//     <Meal.Navigator
//       screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//       }}
//     >
//         <Meal.Screen
//           name="dra"
//           component={dra}
//           options={{ headerShown: false }}
//         />
//       <Meal.Screen name="Categories" component={CategoriesScreen} />
//       <Meal.Screen name="CategoryMeals" component={CategoryMealScreen} />
//       <Meal.Screen name="MealDetail" component={MealDetailScreen} />
//     </Meal.Navigator>
//   );
// }

// const tabScreenOptionsConfig = ({ route }) => ({
//   headerShown: true,
//   tabBarIcon: ({ focused, color, size }) => {
//     if (route.name === 'Meals') {
//       return (
//         <Ionicons
//           name={'ios-restaurant'}
//           size={size}
//           color={color}
//         />
//       );
//     } else if (route.name === 'Favorites') {
//       return (
//         <Ionicons
//           name={'ios-star'}
//           size={size}
//           color={color}
//         />
//       );
//     }
//   },
//   tabBarInactiveTintColor: 'gray',
//   tabBarActiveTintColor: 'tomato',
// })

// const Drawer = createDrawerNavigator();
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
// function dra() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Profile" component={NotificationsScreen} />
//     </Drawer.Navigator>
//   );
// }


import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
export default App

