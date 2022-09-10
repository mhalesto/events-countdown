import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../themes';

interface IContainerProps {
  children?: any,
  background?: string
}

const Container = ({ children, background } : IContainerProps) => {
  return(
    <View style={[ styles.container, { backgroundColor: colors.container }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  }
});

export default Container;