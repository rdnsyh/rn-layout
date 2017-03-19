//@flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import ContactList from './contact/ContactList';
import MailBoxList from './listview/MailBoxList';
import ProfilePage from './contact/profile/ProfilePage';
import LoginForm from './loginscreen/LoginForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentSelected: 'Menu',
    };
    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(component) {
    this.setState({componentSelected: component});
  }

  renderComponent(component) {
    if (component === 'Menu') {
      return <Menu changeComponent={this.changeComponent} />;
    } else if (component === 'Login Page') {
      return <LoginForm changeComponent={this.changeComponent} />;
    } else if (component === 'Contact List') {
      return <ContactList changeComponent={this.changeComponent} />;
    } else if (component === 'Mail Box') {
      return <MailBoxList changeComponent={this.changeComponent} />;
    } else if (component === 'Profile Page') {
      return <ProfilePage changeComponent={this.changeComponent} />;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 20}}>
        <TouchableHighlight onPress={() => this.props.changeComponent('Login Page')} style={styles.button}><Text>Login</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Mail Box')} style={styles.button}><Text>Mail Box</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Contact List')} style={styles.button}><Text>Contact</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Profile Page')} style={styles.button}><Text>Profile</Text></TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
});

export default Home;
