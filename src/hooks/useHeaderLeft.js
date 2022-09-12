import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default (View) => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: View
    })
  }, [View])
}