//@flow
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './LoginForm-style';

const background = require('./background.jpg');
const lockIcon = require('./lock.png');
const personIcon = require('./person.png');

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <Image
          style={styles.background}
          source={background}
          resizeMode="cover"
        >
          <View style={styles.container} />
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconPersonWrap}>
                <Image
                  source={personIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.inputTextPersonWrap}>
                <TextInput
                  placeholder="Username"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconLockWrap}>
                <Image
                  source={lockIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.inputTextLockWrap}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  style={styles.input}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.changeComponent('Mail Box')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container} />
        </Image>
      </View>
    );
  }
}

export default LoginForm;
