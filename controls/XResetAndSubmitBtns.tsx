import {View} from "react-native";
import {Button} from "react-native-paper";

export function XResetAndSubmitBtns({resetForm, submitForm, isFormValid, style, children}) {
  return (<View style={{flexDirection: 'row', ...style}}>
      <Button
        mode="contained"
        onPress={resetForm}
        title="Reset"
        accessibilityLabel="Reset Form"
        style={{marginRight: 13}}
      >Reset</Button>
      <Button
        mode="contained"
        onPress={submitForm}
        title="Submit"
        accessibilityLabel="Reset Form"
        disabled={!isFormValid}
      >Submit</Button>
      {children}
    </View>
  )
}
