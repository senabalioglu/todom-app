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
  inner_container: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
  },
  
  todo_text: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 20,
    marginLeft: 15,
    //color: '#7f7f7f', // bu sabit kalacaksa burada olur
  },
});
