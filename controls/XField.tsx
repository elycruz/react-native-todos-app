import {View} from "react-native";

export const xFieldStyles = {
  marginTop: 13
};

export function XField({children, styles = xFieldStyles}) {
  return <View styles={styles}>
    {children}
  </View>
}
