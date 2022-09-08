import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "../components/MealItem";


export default ({ listData, navigation }) => {

  const renderMealItem = itemData => {
    return (
      <MealItem 
        title={itemData.item.title} 
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={()=>{
          navigation.navigate({
            name: 'MealDetail',
            params: { 
              mealId: itemData.item.id 
            }
          })
        }} 
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList 
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '90%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})