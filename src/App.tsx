import React, { useCallback, useEffect, useState } from 'react';

import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { VideoChat } from './VideoChat';

export default function App() {
  const [userName, setUserName] = useState<string>("mobile")
  const [roomName, setRoomName] = useState<string>("test_mobile")
  const [serverURL, setServerURL] = useState<string>("https://videoroom.membraneframework.org")
  const [videoChatPresent, setVideoChatPresent] = useState<Boolean>(false);

  if (videoChatPresent) {
    return (
      < View style={styles.flex} >
        <Text style={styles.header}>Hello World!</Text>
        <VideoChat displayName={userName} roomName={roomName} serverURL={serverURL} />
        <Button onPress={() => setVideoChatPresent(false)} title="close video chat" />
      </View >
    );
  }
  return (
    < View style={styles.container} >
      <Text style={styles.header}>Hello World!</Text>
      <TextInput value={userName} placeholder="Insert user name" onChangeText={setUserName} style={styles.textInput} />
      <TextInput value={roomName} placeholder="Insert room name" onChangeText={setRoomName} style={styles.textInput} />
      <TextInput value={serverURL} placeholder="Insert server URL" onChangeText={setServerURL} style={styles.textInput} />
      <Button onPress={() => setVideoChatPresent(true)} title="open video chat" />
    </View >
  );
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
