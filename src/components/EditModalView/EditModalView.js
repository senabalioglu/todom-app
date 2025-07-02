import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from '../ModalView/ModalView.styles';
import Button from '../Button/Button';

const EditModalView = ({editedValue, setEdited, sendEdited}) => {
  const [inputHeight, setInputHeight] = useState(40);
  return (
    <View
      style={styles.modal_container}>
     <View>
       <TextInput
      multiline
          onContentSizeChange={e =>
            setInputHeight(e.nativeEvent.contentSize.height)
          }
          scrollEnabled
        style={{margin: 15, fontSize: 18, fontFamily: 'RobotoSlab-Regular'}}
        placeholder="Güncel ToDo"
        value={editedValue}
        onChangeText={setEdited}
      />
     </View>
      <Button buttonText={'Güncelle'} onButtonPress={sendEdited} />
    </View>
  );
};

export default EditModalView;
