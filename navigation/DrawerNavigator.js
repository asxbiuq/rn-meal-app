import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { FilterStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator  
      screenOptions={{headerShown: false}}
    >
      <Drawer.Screen name="Categories" component={TabNavigator}/>
      <Drawer.Screen name="Filters" component={FilterStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;