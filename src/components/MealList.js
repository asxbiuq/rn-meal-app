import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "./MealItem";


export default ({ listData, navigation }) => {
  const renderMealItem = itemData => {

    const { id, title, imageUrl, duration, complexity, affordability } = itemData.item
    
    return (
      <MealItem 
        navigation={navigation}
        title={title} 
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onSelectMeal={()=>{
          navigation.navigate({
            name: 'MealDetail',
            params: { 
              mealId: id,
              mealTitle: title
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