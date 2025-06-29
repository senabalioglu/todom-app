import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {StyleSheet} from 'react-native';
import Button from './components/Button/Button';
import Modal from 'react-native-modal';
import ModalView from './components/ModalView/ModalView';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

const setAndLog = (todo) => {
  setTodo(todo);
}

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Text style={styles.mainText}>ToDoM</Text>
      <ScrollView>
        <FlatList
          data={todoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ToDoCard toDoText={item} />}
          scrollEnabled={false}
        />
      </ScrollView>
      <Button buttonText={'ToDo Ekle'} onButtonPress={toggleModalVisible} />
      <Modal isVisible={modalVisible} onBackdropPress={toggleModalVisible}>
        <ModalView list={todoList} setList={setTodoList} toDoValue={todo} toDoSet={setAndLog} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#FFF2F1',
  },
  mainText: {
    fontSize: 40,
    margin: 20,
  },
});

export default App;
