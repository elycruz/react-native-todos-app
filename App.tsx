import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, MD2LightTheme, Provider as PaperProvider} from 'react-native-paper';

import {XExampleForm} from "./features/example-form/XExampleForm";

const theme = {
  ...MD2LightTheme
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar style={{width: 100}}>
          <Text>App</Text>
        </Appbar>

        <XExampleForm/>

        <StatusBar style="auto"/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
