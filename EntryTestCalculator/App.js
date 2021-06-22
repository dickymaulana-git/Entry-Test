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
  const [check, setCheck] = useState([false, false, false]);
  const [input, setInput] = useState(['0', '0', '0']);
  const operator = ['+', '-', 'x', '/'];
  const [hasil, setHasil] = useState(0);

  const tambah = () => {
    let hasil_tambah = input
      .filter((e, i) => check[i])
      .map(e => parseFloat(e))
      .reduce((prevItem, currentItem, i) => (prevItem += currentItem));
    setHasil(hasil_tambah);
  };

  const kurang = () => {
    let hasil_kurang = input
      .filter((e, i) => check[i])
      .map(e => parseFloat(e))
      .reduce((prevItem, currentItem, i) => (prevItem -= currentItem));
    setHasil(hasil_kurang);
  };

  const kali = () => {
    let hasil_kali = input
      .filter((e, i) => check[i])
      .map(e => parseFloat(e))
      .reduce((prevItem, currentItem, i) => (prevItem *= currentItem));
    setHasil(hasil_kali);
  };

  const bagi = () => {
    let hasil_bagi = input
      .filter((e, i) => check[i])
      .map(e => parseFloat(e))
      .reduce((prevItem, currentItem, i) => (prevItem /= currentItem));
    setHasil(hasil_bagi);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputContainer}>
          {input.map((e, i) => {
            return (
              <View key={i} style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Input Number"
                  keyboardType="numeric"
                  value={input[i]}
                  onChangeText={e => {
                    let newInput = [...input];
                    newInput[i] = e;
                    setInput(newInput);
                  }}
                />
                <Icon
                  onPress={() => {
                    let newCheck = [...check];
                    newCheck[i] = !check[i];
                    setCheck(newCheck);
                  }}
                  style={styles.iconChecker}
                  name="checkbox-marked"
                  color={check[i] === false ? 'silver' : 'green'}
                  size={30}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.operator}>
          {operator.map((e, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                let count_check = check.filter(e => e === false);
                if (count_check.length >= 2) {
                  alert('Error, Checklist minimal 2 input');
                } else {
                  if (e === '+') {
                    tambah();
                  } else if (e === '-') {
                    kurang();
                  } else if (e === 'x') {
                    kali();
                  } else {
                    bagi();
                  }
                  Keyboard.dismiss();
                }
              }}
              style={styles.operatorSignWrapper}>
              <Text style={styles.operatorSignText}>{e}</Text>
            </TouchableOpacity>
          ))}
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
