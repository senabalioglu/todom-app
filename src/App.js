import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  TextInput,
} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {StyleSheet} from 'react-native';
import Button from './components/Button/Button';
import Modal from 'react-native-modal';
import ModalView from './components/ModalView/ModalView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditModalView from './components/EditModalView/EditModalView';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedToDo, setEditedToDo] = useState('');
  const [currentToDoIndex, setCurrentToDoIndex] = useState(null);

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

  const setAndLog = todo => {
    setTodo(todo);
  };

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const toggleEditModalVisible = () => {
    setEditModalVisible(!editModalVisible);
  };

  const openEditModal = (item, index) => {
    setEditedToDo(item);
    setCurrentToDoIndex(index);
    toggleEditModalVisible();
  };

  const sendEditedToDo = async () => {
    const updatedList = [...todoList];
    updatedList[currentToDoIndex] = editedToDo;
    setTodoList(updatedList);
    await AsyncStorage.setItem('todoList', JSON.stringify(updatedList));
    toggleEditModalVisible();
  }

  const deleteToDo = async item => {
    const newTodoList = todoList.filter(todo => todo !== item);
    setTodoList(newTodoList);
    await AsyncStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Text style={{ fontFamily: 'RobotoSlab-Bold', fontSize: 50 , margin: 15}}>ToDoM</Text>
      <ScrollView>
        <FlatList
          data={todoList}
          keyExtractor={index => index.toString()}
          renderItem={({item, index}) => (
            <ToDoCard
              onEditToDo={() => openEditModal(item, index)}
              onDeleteToDo={() => deleteToDo(item)}
              toggleVisible={toggleModalVisible}
              toDoText={item}
            />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
      <Button buttonText={'ToDo Ekle'} onButtonPress={toggleModalVisible} />
      <Modal isVisible={modalVisible} onBackdropPress={toggleModalVisible} >
        <ModalView
          list={todoList}
          setList={setTodoList}
          toDoValue={todo}
          toDoSet={setAndLog}
          toggle={toggleModalVisible}
        />
      </Modal>
      <Modal isVisible={editModalVisible} onBackdropPress={toggleEditModalVisible}>
        <EditModalView
        editedValue={editedToDo}
        setEdited={setEditedToDo}
        sendEdited={sendEditedToDo}
        />
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
