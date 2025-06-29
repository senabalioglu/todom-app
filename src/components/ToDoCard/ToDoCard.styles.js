import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#F3C9B1',
    width: '95%',
    height: 85,
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
