//@flow
import React, {Component} from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import ContactList from '../ContactList';

class ChangeComponentOnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentSelected: 'One',
    };
    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(component) {
    this.setState({componentSelected: component});
  }

  renderComponent(component) {
    if (component === 'One') {
      return <ComponentOne changeComponent={this.changeComponent} />;
    } else if (component === 'Two') {
      return <ComponentTwo changeComponent={this.changeComponent} />;
    } else if (component === 'Three') {
      return <ComponentThree changeComponent={this.changeComponent} />;
    } else if (component === 'Contact List') {
      return <ContactList />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
}

class ComponentOne extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'red', paddingTop: 60, flex: 1}}>
        <Text style={{color: 'white', marginBottom: 150, fontSize: 20}}>Hello From Component One</Text>
        <TouchableHighlight onPress={() => this.props.changeComponent('Two')} style={styles.button}><Text>Two</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Three')} style={styles.button}><Text>Three</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Contact List')} style={styles.button}><Text>Contact List</Text></TouchableHighlight>
      </View>
    );
  }
}

class ComponentTwo extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'orange', paddingTop: 60, flex: 1}}>
        <Text style={{color: 'white', marginBottom: 150, fontSize: 20}}>Hello From Component Two</Text>
        <TouchableHighlight onPress={() => this.props.changeComponent('One')} style={styles.button}><Text>One</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Three')} style={styles.button}><Text>Three</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Contact List')} style={styles.button}><Text>Contact List</Text></TouchableHighlight>
      </View>
    );
  }
}


class ComponentThree extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'purple', paddingTop: 60, flex: 1}}>
        <Text style={{color: 'white', marginBottom: 150, fontSize: 20}}>Hello From Component Three</Text>
        <TouchableHighlight onPress={() => this.props.changeComponent('One')} style={styles.button}><Text>One</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Two')} style={styles.button}><Text>Two</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Contact List')} style={styles.button}><Text>Contact List</Text></TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
});

export default ChangeComponentOnPage;
// AppRegistry.registerComponent('SampleApp', () => SampleApp);
