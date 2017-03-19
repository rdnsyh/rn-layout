//@flow
import React, {Component} from 'react';
import {
     Text,
     View,
     ListView,
     TouchableOpacity,
} from 'react-native';
import styles from './MailBoxList-style';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const inboxIcon = (<Icon name="inbox" size={20} color="#900" />);
const starIcon = (<Icon name="star" size={20} color="#900" />);
const flagIcon = (<Icon name="flag" size={20} color="#900" />);
const sentIcon = (<Icon name="paper-plane" size={20} color="#900" />);
const trashIcon = (<Icon name="trash" size={20} color="#900" />);

// const mailIcon = require('./mail.png');

export default class MailBoxList extends Component {
  constructor(props: any) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{text: 'Inbox', picture: inboxIcon}, {text: 'Starred', picture: starIcon}, {text: 'Flagged', picture: flagIcon}, {text: 'Sent', picture: sentIcon}, {text: 'Delete', picture: trashIcon}]),
    };
  }

  // _onPressButton() {
  // }

  render() {
    return (
      <View style = {styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderHeader={
            () => (
              <View style={styles.title}>
                <Text style={styles.header}>MailBox</Text>
              </View>
            )
          }
          renderRow={
            (rowData, sectionID, rowID, highlightRow) => (
              <ListItem renderRowAPI={{rowData, sectionID, rowID, highlightRow}} name={rowID} />
            )
          }
          renderSeparator={
            (sectionID, rowID, adjacentRowHighlighted) => (
              <View
                key={rowID}
                style={[styles.separator, {backgroundColor: adjacentRowHighlighted ? '#ff28af' : '#8E8E8E'}]}
              />
            )
          }
          renderFooter={
            () => (
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.changeComponent('Contact List')}>
                <Text style={styles.smallText}>More v</Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
}
