import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import {StyleSheet, View} from 'react-native';
import {Platform} from 'react-native';
import {Appbar, MD2LightTheme, Provider as PaperProvider, Menu} from 'react-native-paper';
import {XExampleForm} from "./features/example-form/XExampleForm";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


const theme = {
  ...MD2LightTheme
};

export default function App() {
  const [menuOpened, setMenuOpenedState] = useState(false),
    openMenu = () => setMenuOpenedState(true),
    closeMenu = () => setMenuOpenedState(false),
    onMoreIconPress = e => {
      openMenu();
      console.log('more-icon pressed');
    }
  ;
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Content title="Example App"/>
          <Menu
            visible={menuOpened}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon={MORE_ICON} style={{color: '#ffffff'}} onPress={onMoreIconPress}/>}>
            <Menu.Item onPress={() => {
            }} title="Todos"/>
            <Menu.Item onPress={() => {
            }} title="Create Todo"/>
          </Menu>
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
