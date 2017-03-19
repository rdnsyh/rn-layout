//@flow
import React from 'react';
import {
  TouchableHighlight,
  View,
  // Image,
  Text,
} from 'react-native';
import styles from './MailBoxList-style';

// type Props = {
//   renderRowAPI: {
//     rowData: string;
//     sectionID: number;
//     rowID: number;
//     highlightRow: Function;
//   };
//   name: number;
// };

// const mailIcon = require('./mail.png');

function ListItem(props) {
  let {rowData, sectionID, rowID, highlightRow} = props.renderRowAPI;
  let {name} = props;
  // console.log('props >>', props);
  return (
    <TouchableHighlight
      underlayColor="rgba(129, 127, 127, 0.65)"
      onPress={() => {
        highlightRow ? highlightRow(sectionID, rowID) : null;
        // this._onPressButton(rowData);
      }}
    >
      <View style={styles.listWrapper}>
        <Text style={{flex: 1}}>{rowData.picture}</Text>
        <Text style={[styles.rowText, {flex: 9}]}>{`${rowData.text}`}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;
