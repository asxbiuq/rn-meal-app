import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default (navigation,title) => {
  const LogoTitle = () => {
    return (
      <Text>{title}</Text>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />
    })
  }, [navigation])
}