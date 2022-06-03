import React, { useCallback, useEffect, useState } from 'react';

import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

import { VideoChat } from './VideoChat';

export default function App() {
  const [chatRunning, setChatRunning] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("")

  if (chatRunning) {
    return (
      <View style={styles.flex}>
        <VideoChat userName={userName} />
        <Button title="Exit chat" onPress={() => setChatRunning(false)}/>
      </View>
      );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello World!</Text>
        <TextInput value={userName} placeholder="Insert user name" onChangeText={setUserName} style={styles.textInput} />
        <Button title="Start video chat" onPress={() => setChatRunning(true)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 50,
    fontSize: 20
  },
  header: {
    fontSize: 50,
    marginBottom: 20
  },
  textInput: {
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 20,
    fontSize: 20,
    padding: 10,
  },
});
