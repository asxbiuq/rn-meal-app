import * as React from 'react';
import { Button, Text, Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MEALS } from "../data/dummy-data";
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/icon.png')}
    />
  );
}

function HomeScreen({ navigation, route }) {
  const [count, setCount] = React.useState(0);
  // const { mealId } = route.params
  // const selectedMeal = MEALS.find(meal => meal.id === mealId)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);

  return (
    <View style={styles.screen}>
      {/* <Text>{selectedMeal.title}</Text> */}
      <Button 
        title='Go Back to Categories'
        onPress={() => {
          navigation.popToTop()
        }}
        />
    </View>
  )
}

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={({ navigation, route }) => ({
//             headerTitle: (props) => <LogoTitle {...props} />,
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default HomeScreen;
