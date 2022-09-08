import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";

export default ({ navigation, route }) => {

  const LogoTitle = () => {
    return (
      <Text>Filter Meal</Text>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
       <HeaderButtons HeaderButtonsComponent={HeaderButton}>
          <Item
            title="Filter Meal" 
            onPress={() => {
              console.log('Filter Meal')
            }}
          />
       </HeaderButtons>
      ),
    })
  }, [navigation])

  return(
    <View style={styles.screen}>
      <Text>The FiltersScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})