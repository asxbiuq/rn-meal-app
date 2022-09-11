import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import DefaultText from "./DefaultText"

export default ({ onSelectMeal, title, duration, complexity, affordability, imageUrl }) => {

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground 
              source={{uri: imageUrl}}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem:{
    height: 200,
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 15
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '180px'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  }
})