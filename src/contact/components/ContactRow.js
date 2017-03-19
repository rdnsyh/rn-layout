//@flow
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const ContactRow = (props) => (
  <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
    {console.log('props from renderRow >>', props)}
    <View style={styles.container}>
      <Image source={{uri: props.picture.large}} style={styles.photo} />
      <Text style={styles.text}>
        {`${props.name.first} ${props.name.last}`}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default ContactRow;
