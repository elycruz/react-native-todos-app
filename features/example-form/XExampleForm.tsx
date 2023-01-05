import {Text} from "react-native";
import {XFieldset, XResetAndSubmitBtns} from "../../controls";
import {useState} from "react";
import {useForm, Controller, RegisterOptions} from "react-hook-form";
import {TextInput} from "react-native-paper";

const exampleInputName = 'exampleInput';

export function XExampleForm({children}) {
  const [isFormValid, setFormValid] = useState(true),
    [submittedData, setSubmittedData] = useState(null),
    {control, handleSubmit, formState: {errors}, reset} = useForm({
      defaultValues: {
        exampleInput: '',
        lastName: ''
      }
    }),
    onSubmit = handleSubmit(
      data => {
        console.log(data);
        setSubmittedData(data);
      }, () => {
        setFormValid(false);
      }),
    onReset = e => {
      reset();
      setFormValid(true);
      setSubmittedData(null);
      console.log('reset', e);
    }
  ;
  return <XFieldset>
    <Text>ExampleForm</Text>
    <XFieldset>
      {!isFormValid ? <Text>An error occurred</Text> : null}
      <Controller
        control={control}
        rules={{required: true, maxLength: 55} as RegisterOptions}
        name="exampleInput"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Example Input"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            accessibilityLabel={"Example Input"}
          />
        )}
      />

      {errors[exampleInputName] && <Text style={{color: 'red'}}>
        Please input a value for this field.</Text>}

      <Text>{submittedData && JSON.stringify(submittedData)}</Text>
    </XFieldset>

    {children}

    <XResetAndSubmitBtns
      resetForm={onReset}
      submitForm={onSubmit}
      isFormValid={isFormValid}
      style={{marginTop: 13}}
    />
  </XFieldset>
}
