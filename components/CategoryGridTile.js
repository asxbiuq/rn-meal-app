import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default ({onSelect,title,color}) => {
  return (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={onSelect}
    >
      <View 
        style={{ ...styles.container, ...{ backgroundColor: color }}}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex:1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: 0.26,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 5,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    // fontFamily: '',
    fontSize: 12
  }
})