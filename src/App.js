import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {StyleSheet} from 'react-native';
import Button from './components/Button/Button';
import Modal from 'react-native-modal';
import ModalView from './components/ModalView/ModalView';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Text style={styles.mainText}>ToDoM</Text>
      <ScrollView>
        <ToDoCard />
      </ScrollView>
      <Button buttonText={'ToDo Ekle'} onButtonPress={toggleModalVisible} />
      <Modal isVisible={modalVisible} onBackdropPress={toggleModalVisible}>
        <ModalView />
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
