import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import useHeaderLeft from "../hooks/useHeaderLeft";
import IoniconsHeaderButton from "../components/IoniconsHeaderButton";


export default ({ navigation }) => {

  useHeaderLeft(navigation,() => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item title="menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  ))

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate({
            name: 'CategoryMeals',
            params: { 
              categoryId: itemData.item.id 
            }
          })
      }}/>
    )
  }

  return(
    <FlatList 
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES} 
      numColumns={2} 
      renderItem={renderGridItem}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})