import {Text} from "react-native";

export function XFieldErrorText({children, style = xFieldErrorTextStyles}) {
  return <Text style={style}>{children}</Text>
}

export const xFieldErrorTextStyles = {
  color: 'red',
  marginTop: 13
};
