import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from '@expo/vector-icons'
import Colors from "../constants/Color";

export default () => {
  return (
    <HeaderButton 
      {...props} 
      IconComponent={Ionicons} 
      iconSiz={23}
      color={Colors.primaryColor}
    />
  )
}
