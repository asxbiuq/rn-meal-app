import { useLayoutEffect } from "react";

export default (navigation,View) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: View,
    })
  }, [navigation])
}