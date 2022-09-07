import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default ({ navigation }) => {

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