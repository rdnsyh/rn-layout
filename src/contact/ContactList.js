//@flow
import React, {Component} from 'react';
import {ListView, View, Platform} from 'react-native';

import ContactRow from './components/ContactRow';
import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';
import demoData from './data';

import styles from './ContactList-style';

class ContactList extends Component {
  constructor(props) {
    super(props);

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const {dataBlob, sectionIds, rowIds} = this._formatData(demoData);

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
      searchText: '',
    };

    // console.log('dataSource _dataBlob["0:0"]>>', this.state.dataSource._dataBlob['0:0']);
    // let dataCore = Object.keys(dataBlob);
    // let onlyName = dataCore.splice(dataCore.indexOf('0:0'));
    // console.log('onlyName >>', onlyName);
  }

  _formatData(data) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      const currentChar = alphabet[sectionId];
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
      if (users.length > 0) {
        sectionIds.push(sectionId);
        dataBlob[sectionId] = {character: currentChar};
        rowIds.push([]);
        for (let i = 0; i < users.length; i++) {
          const rowId = `${sectionId}:${i}`;
          rowIds[rowIds.length - 1].push(rowId);
          dataBlob[rowId] = users[i];
        }
      }
    }

    return {dataBlob, sectionIds, rowIds};
  }

  render() {
    // let {searchText} = this.state;
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <ContactRow onPress={() => this.props.changeComponent('Profile Page')} {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header />}
        renderFooter={() => <Footer />}
        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
      />
    );
  }
}

export default ContactList;
