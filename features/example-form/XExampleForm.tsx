import {Text} from "react-native";
import {XField, XFieldset, XResetAndSubmitBtns} from "../../controls";
import {useState} from "react";
import {useForm, Controller, RegisterOptions, FieldValues} from "react-hook-form";
import {TextInput} from "react-native-paper";
import {XFieldHelpText} from "../../controls/XFieldHelpText";
import {XFieldErrorText} from "../../controls/XFieldErrorText";

const exampleInputName = 'email',
  exampleInputLabel = 'Example Input';

export function XExampleForm({children}) {
  const [isFormValid, setFormValid] = useState(true),
    [submittedData, setSubmittedData] = useState(null as FieldValues),
    {control, handleSubmit, formState: {errors}, reset} = useForm({
      defaultValues: {
        [exampleInputName]: '',
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
    <XFieldset style={{marginTop: 13}}>

      {!isFormValid ? <Text style={{marginTop: 13, marginBottom: 13}}>An error occurred</Text> : null}

      <XField>
        <Controller
          control={control}
          rules={{required: true, maxLength: 55} as RegisterOptions}
          name={exampleInputName}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label={exampleInputLabel}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              accessibilityLabel={exampleInputLabel}
              required={true}
            />
          )}
        />

        {errors[exampleInputName] && (<XFieldErrorText>
          Please input a value for this field.
        </XFieldErrorText>)}

        <XFieldHelpText>Maxlength: 55</XFieldHelpText>
      </XField>

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
