import {View} from "react-native";
import {Component} from "react";

export class XFieldset extends Component<any, any> {
  render() {
    const {props: {children, style = xFieldsetStyles}} = this;
    return <View style={style}>
      {children}
    </View>
  }
}

export const xFieldsetStyles = {
  marginTop: 13
}
