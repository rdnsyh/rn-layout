//@flow
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        marginTop: 20,
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 40,
    backgroundColor: 'transparent',
  },
  inputTextPersonWrap: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopRightRadius: 5,
    marginVertical: 1,
  },
  inputTextLockWrap: {
    flex: 1,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  iconPersonWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d73352',
    borderTopLeftRadius: 5,
    marginVertical: 1,
  },
  iconLockWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d73352',
    borderBottomLeftRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#d73352',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#FFF',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

export default styles;
