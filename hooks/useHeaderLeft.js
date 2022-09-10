import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default (navigation,left) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        left
      ),
    })
  }, [navigation])
}