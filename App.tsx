import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, StatusBar, Button, Platform } from 'react-native';

const App = () => {

  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30 }}>Platform : {Platform.OS}</Text>
      {
        Platform.OS == "android" ?
          <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
          :
          <View style={{ backgroundColor: 'red', height: 100, width: 100 }}></View>
      }
      <Text style={styles.text}>Hey There</Text>
      <Text style={{fontSize:20}}> {JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>

      <StatusBar
        backgroundColor="orange"
        barStyle={barStyle}
        hidden={false}
      />
      <Button title='Toggle Status Bar' onPress={() => setHide(!hide)} />
      <Button title='Update Style' onPress={() => setBarStyle("dark-content")} />

      <Pressable
        // onPress={() => console.warn("Normal on Press")}
        // onLongPress={() => { console.warn("long press") }}
        onPressIn={() => { console.warn("press in") }}
        onPressOut={() => { console.warn("press out") }}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center'
  },
  pressableBtn: {
    backgroundColor: 'blue',
    color: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5
  },
  text: {
    color: Platform.OS == "android" ? "orange" : 'blue',
    fontSize: 20
  }
})

export default App;