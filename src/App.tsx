import React, { useCallback, useEffect, useState } from 'react';

import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

import { VideoChat } from './VideoChat'

export default function App() {
  const [userName, setUserName] = useState<string>("")
  const [videoChatActive, setVideoChatActive] = useState<Boolean>(false);

  if (videoChatActive) {
    return (
      <View style={styles.flex}>
        <VideoChat userName={userName} />
        <Button title="Exit chat" onPress={() => setVideoChatActive(false)} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello World!</Text>
        <TextInput value={userName} placeholder="Insert user name" onChangeText={setUserName} style={styles.textInput} />
        <Button title="Open video chat" onPress={() => setVideoChatActive(true)} />
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
