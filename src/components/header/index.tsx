import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors } from '../../themes';

interface IHeaderProps {
  background?: string,
  title?: string,
  backIcon?: boolean,
  searchIcon?: boolean,
  moreIcon?: boolean,
  iconColors?: string
}

const Header = ({background, title, backIcon, searchIcon, moreIcon, iconColors}: IHeaderProps) => {

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return(
    <Appbar.Header style={[styles.container, {backgroundColor: background}]}>
      { backIcon && <Appbar.BackAction color={iconColors} onPress={_goBack} /> }
      <Appbar.Content titleStyle={styles.title} title={title}/>
      { searchIcon && <Appbar.Action color={iconColors} icon="magnify" onPress={_handleSearch} /> }
      { moreIcon && <Appbar.Action color={iconColors} icon="dots-vertical" onPress={_handleMore} /> }
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    color: colors.heading, 
    fontWeight: 'bold',
    fontSize: 24
  }
});

export default Header