import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import {Button} from 'react-native-elements';
import {PricingCard} from 'react-native-elements';
import {List, ListItem} from 'react-native-elements';

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    color: 'grey',
    flexWrap: 'wrap',
  },
  button: {
    flex: 1,
    backgroundColor: '#d73352',
    paddingVertical: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

const myIcon = (<Icon name="rocket" size={20} color="#900" />);

class HomeScreen extends Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Text>{myIcon} Hello Navigation</Text>
        <Button
          raised
          icon={{name: 'cached'}}
          title="RAISED WITH ICON" />
        <PricingCard
          color="#4f9deb"
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
        />
        <List>
          <ListItem
            roundAvatar
            title="Limited supply! Its like digital gold! why this words is not enough to make it through"
            subtitle={
              <View style={styles.subtitleView}>
                {/* <Image source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} style={styles.ratingImage}/> */}
                <Text style={styles.ratingText}>{myIcon} 5 months ago</Text>
              </View>
            }
            avatar={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
          />
        </List>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.changeComponent('Contact List')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// const SimpleApp = StackNavigator({
//   Home: {screen: HomeScreen},
// });

// export default SimpleApp;
export default HomeScreen;
