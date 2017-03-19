import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

type State = {
  items: Array<string>;
  searchText: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

const Header = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
      // onChangeText={props.onSearch}
    />
  </View>
);

export default Header;
