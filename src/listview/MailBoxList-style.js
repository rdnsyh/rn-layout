//@flow
import {StyleSheet} from 'react-native';
import {Constants} from 'expo';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  rowText: {
    fontSize: 16,
    color: '#595656',
  },
  smallText: {
    fontSize: 12,
    padding: 10,
    color: '#595656',
  },
  title: {
    backgroundColor: '#322e2e',
    borderWidth: 1,
    borderColor: '#818080',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
});

export default styles;
