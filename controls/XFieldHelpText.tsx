import {Text} from "react-native";

export function XFieldHelpText({children, style=xFieldHelpTextStyles}) {
  return <Text style={style}>{children} </Text>
}

export const xFieldHelpTextStyles = {
  fontSize: 10,
  marginTop: 13
}
