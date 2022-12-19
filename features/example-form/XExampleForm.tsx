import {Text, TextInput, View} from "react-native";
import {XFieldset, XResetAndSubmitBtns} from "../../controls";
import {useState} from "react";

const preventDefault = e => e.preventDefault(),
  resetForm = e => (preventDefault(e), console.log('reset')),
  submitForm = e => (preventDefault(e), console.log('submit'));

export function XExampleForm({children, resetForm, submitForm}) {
  const [isFormValid, setFormValid] = useState(false);

  return <XFieldset>
    <Text>ExampleForm</Text>
    <XFieldset>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
        accessibilityLabel={'Text Input'}
      />
    </XFieldset>

    {children}

    <XResetAndSubmitBtns
      resetForm={resetForm}
      submitForm={submitForm}
      isFormValid={isFormValid}
      style={{marginTop: 13}}
    />

  </XFieldset>
}
