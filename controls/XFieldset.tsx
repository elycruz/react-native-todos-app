import {Text, View} from "react-native";
import {Component} from "react";

export class XFieldset extends Component<any, any> {
  render() {
    const {props: {children}} = this;
    return <View>
      <Text>Fieldset</Text>
      {children}
    </View>
  }
}
