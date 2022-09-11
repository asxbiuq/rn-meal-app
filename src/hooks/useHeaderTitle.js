import { useLayoutEffect } from "react";

export default (navigation,View) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: View
    })
  }, [navigation])
}