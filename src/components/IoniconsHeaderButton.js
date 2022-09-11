import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

export default (props) => {
  return (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  )
}