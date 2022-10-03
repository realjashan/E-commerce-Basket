import { View, Text, TextInput, StyleSheet } from 'react-native';

 import { Colors } from '../../constants/style';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'black',
    marginBottom: 4,
  },
  labelInvalid: {
    color:'red',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor:'white',
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor:'ivory',
    
    borderColor:'red',
    borderWidth:1,

    borderRadius:5,
  },
});