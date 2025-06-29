import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {StyleSheet} from 'react-native';
import Button from './components/Button/Button';
import Modal from 'react-native-modal';
import ModalView from './components/ModalView/ModalView';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todoList');
        if (storedTodos !== null) {
          setTodoList(JSON.parse(storedTodos));
        }
      } catch (e) {
        console.error('Veri alınamadı:', e);
      }
    };

    loadTodos();
  }, []);

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
