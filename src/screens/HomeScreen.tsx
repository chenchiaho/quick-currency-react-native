import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text >
        Convert Currency On The Go!
      </Text>

      <Text style={styles.label}>From:</Text>
      <View style={styles.row}>
        <Picker style={styles.picker}>
          <Picker.Item label="USD" value="usd" />
          <Picker.Item label="EUR" value="eur" />
          <Picker.Item label="JPY" value="jpy" />
        </Picker>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Amount'
        />
      </View>

      <Text style={styles.labelTo}>To:</Text>
      <View style={styles.row}>
        <Picker style={styles.picker}>
          <Picker.Item label="USD" value="usd" />
          <Picker.Item label="EUR" value="eur" />
          <Picker.Item label="JPY" value="jpy" />
        </Picker>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Amount'
        />
      </View>

      <View style={styles.buttonRow}>
        <Button
          color="#0000ff"
          title="SWAP"
        />
        <Button
          color="#008000"
          title="CONVERT"
        />
        <Button
          color="#ffff00"
          title="Add to Fav"
        />
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
  labelTo: {
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});