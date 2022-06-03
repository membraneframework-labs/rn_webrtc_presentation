import React, { useCallback, useEffect, useState } from 'react';

import { StyleSheet, View, PermissionsAndroid, SafeAreaView, Text, TextInput, Platform, Pressable } from 'react-native';

import { requestPermissions } from './Utils';
// import * as MembraneWebRTC from '@membraneframework/react-native-membrane-webrtc';
import { Room } from './Room';

// const serverUrl = 'http://192.168.83.85:4000/socket'
const serverUrl = 'http://10.71.5.226:4000/socket'

export default function App() {
  // const webRTC = MembraneWebRTC.useMembraneServer();
  const webRTC = {};
  const [connected, setConnected] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("room");
  const [displayName, setDisplayName] = useState<string>(`mobile ${Platform.OS}`)

  useEffect(() => {
    if (webRTC.error) {
      console.log(webRTC.error);
    }
  }, [webRTC]);

  const connect = useCallback(async () => {
    await requestPermissions();
    // await webRTC.connect(serverUrl, roomName, { userMetadata: { displayName } });
    // await webRTC.joinRoom();
    setConnected(true);
  }, [webRTC, roomName]);

  const disconnect = useCallback(() => {
    setConnected(false);
    // webRTC.disconnect();
  }, [webRTC]);

  if (connected) {
    return <SafeAreaView style={styles.flex}><Room disconnect={disconnect} /></SafeAreaView>;
  }

  return (
    <View style={styles.container}>
      <Text>Room name:</Text>
      <TextInput value={roomName} onChangeText={setRoomName} style={styles.textInput} />
      <Text>Display name:</Text>
      <TextInput value={displayName} onChangeText={setDisplayName} style={styles.textInput} />
      <Pressable onPress={connect}><Text style={styles.button}>Connect!</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#001A72',
    borderRadius: 4,
    marginBottom: 20,
    fontSize: 20,
    padding: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: '#001A72',
    borderRadius: 4,
    marginVertical: 20,
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#b5d2ff'
  }
});
