import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import FiltersScreen from "../screens/FiltersScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={TabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;