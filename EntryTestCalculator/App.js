import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [input1, setInput1] = useState('0');
  const [input2, setInput2] = useState('0');
  const [input3, setInput3] = useState('0');

  const [hasil, setHasil] = useState(0);

  const tambah = () => {
    if(check1 === true && check2 === true && check3 === false){
      setHasil(parseInt(input1)+parseInt(input2))
    }else if(check1 === true && check2 === false && check3 === true){
      setHasil(parseInt(input1)+parseInt(input3))
    }else if(check1 === false && check2 === true && check3 === true){
      setHasil(parseInt(input2)+parseInt(input3))
    }else{
      setHasil(parseInt(input1)+parseInt(input2)+parseInt(input3))
    }
  };

  const kurang = () => {
    if(check1 === true && check2 === true && check3 === false){
      setHasil(parseInt(input1)-parseInt(input2))
    }else if(check1 === true && check2 === false && check3 === true){
      setHasil(parseInt(input1)-parseInt(input3))
    }else if(check1 === false && check2 === true && check3 === true){
      setHasil(parseInt(input2)-parseInt(input3))
    }else{
      setHasil(parseInt(input1)-parseInt(input2)-parseInt(input3))
    }
  };

  const kali = () => {
    if(check1 === true && check2 === true && check3 === false){
      setHasil(parseInt(input1)*parseInt(input2))
    }else if(check1 === true && check2 === false && check3 === true){
      setHasil(parseInt(input1)*parseInt(input3))
    }else if(check1 === false && check2 === true && check3 === true){
      setHasil(parseInt(input2)*parseInt(input3))
    }else{
      setHasil(parseInt(input1)*parseInt(input2)*parseInt(input3))
    }
  };

  const bagi = () => {
    if(check1 === true && check2 === true && check3 === false){
      setHasil(parseInt(input1)/parseInt(input2))
    }else if(check1 === true && check2 === false && check3 === true){
      setHasil(parseInt(input1)/parseInt(input3))
    }else if(check1 === false && check2 === true && check3 === true){
      setHasil(parseInt(input2)/parseInt(input3))
    }else{
      setHasil(parseInt(input1)/parseInt(input2)/parseInt(input3))
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Input Number"
              keyboardType="numeric"
              value={input1}
              onChangeText={e => setInput1((e.replace(/[^0-9]/g, '')))}
            />
            <Icon
              onPress={() => setCheck1(!check1)}
              style={styles.iconChecker}
              name="checkbox-marked"
              color={check1 === false ? 'silver' : 'green'}
              size={30}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Input Number"
              keyboardType="numeric"
              value={input2}
              onChangeText={e => setInput2(e.replace(/[^0-9]/g, ''))}
            />
            <Icon
              onPress={() => setCheck2(!check2)}
              style={styles.iconChecker}
              name="checkbox-marked"
              color={check2 === false ? 'silver' : 'green'}
              size={30}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Input Number"
              keyboardType="numeric"
              value={input3}
              onChangeText={e => setInput3(e.replace(/[^0-9]/g, ''))}
            />
            <Icon
              onPress={() => setCheck3(!check3)}
              style={styles.iconChecker}
              name="checkbox-marked"
              color={check3 === false ? 'silver' : 'green'}
              size={30}
            />
          </View>
        </View>
        <View style={styles.operator}>
          <TouchableOpacity
            onPress={() => {
              if (
                (check1 === false && check3 === false && check2 === false) ||
                (check1 === true && check3 === false && check2 === false) ||
                (check2 === true && check3 === false && check1 === false) ||
                (check3 === true && check1 === false && check2 === false)
              ) {
                alert('Error, Checklist minimal 2 input');
              } else {
                tambah();
                Keyboard.dismiss();
              }
            }}
            style={styles.operatorSignWrapper}>
            <Text style={styles.operatorSignText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (
                (check1 === false && check3 === false && check2 === false) ||
                (check1 === true && check3 === false && check2 === false) ||
                (check2 === true && check3 === false && check1 === false) ||
                (check3 === true && check1 === false && check2 === false)
              ) {
                alert('Error, Checklist minimal 2 input');
              } else {
                kurang();
                Keyboard.dismiss();
              }
            }}
            style={styles.operatorSignWrapper}>
            <Text style={styles.operatorSignText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (
                (check1 === false && check3 === false && check2 === false) ||
                (check1 === true && check3 === false && check2 === false) ||
                (check2 === true && check3 === false && check1 === false) ||
                (check3 === true && check1 === false && check2 === false)
              ) {
                alert('Error, Checklist minimal 2 input');
              } else {
                kali();
                Keyboard.dismiss();
              }
            }}
            style={styles.operatorSignWrapper}>
            <Text style={styles.operatorSignText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (
                (check1 === false && check3 === false && check2 === false) ||
                (check1 === true && check3 === false && check2 === false) ||
                (check2 === true && check3 === false && check1 === false) ||
                (check3 === true && check1 === false && check2 === false)
              ) {
                alert('Error, Checklist minimal 2 input');
              } else {
                bagi();
                Keyboard.dismiss();
              }
            }}
            style={styles.operatorSignWrapper}>
            <Text style={styles.operatorSignText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hasilWrapper}>
          <Text style={styles.hasilText}>Hasil :</Text>
          <Text style={styles.hasilText}>{hasil}</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    maxWidth: '60%',
    padding: 15,
  },
  iconChecker: {
    marginLeft: 10,
  },
  operator: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  operatorSignWrapper: {
    marginHorizontal: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  operatorSignText: {
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  hasilWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  hasilText: {
    fontSize: 20,
    marginTop: 20,
  },
});
