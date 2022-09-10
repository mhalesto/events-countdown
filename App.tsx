import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { colors } from './src/themes';


export default function App() {
  
  return (
    <PaperProvider>
      <React.Fragment>
      <Header 
        title='Sign Up'
        background={colors.background}
        backIcon
        iconColors={colors.icon}  
      />
      <View style={[styles.container]}>
      </View>
      </React.Fragment>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },
});
