import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 10,
    flexDirection: 'row',
    width: '95%',
    height: 45,
    alignItems: 'center',
    padding: 10,
  },
  card_text:{
    fontSize: 20,
    marginLeft: 15,
    color: 'white',
  },
  inner_container: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
  },
  icon: {
    marginRight: 10,
  },
});
