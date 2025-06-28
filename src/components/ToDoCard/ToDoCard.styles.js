import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F3C9B1',
    width: '100%',
    height: 100,
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    elevation: 10,
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
