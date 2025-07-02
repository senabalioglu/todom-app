import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },

  todo_text_view: {
    flex: 1,
    marginHorizontal: 10,
  },

  todo_text: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 20,
    fontWeight: '500',
  },

  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
