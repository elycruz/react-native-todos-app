import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Appbar, MD2LightTheme, Provider as PaperProvider} from 'react-native-paper';

import {XExampleForm} from "./features/example-form/XExampleForm";

const theme = {
  ...MD2LightTheme
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Content title="Example App"/>
        </Appbar.Header>

        <View style={{padding: 13}}>
          <XExampleForm/>
        </View>

        <StatusBar style="auto"/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minWidth: 320
  },
  appBar: {
    minWidth: 320,
    padding: 13
  }
});
