import { useLayoutEffect } from "react";

export default (navigation,View) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: View,
    })
  }, [navigation,View])
}