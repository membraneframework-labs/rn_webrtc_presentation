import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as MembraneWebRTC from '@membraneframework/react-native-membrane-webrtc';
import { requestPermissions } from './Utils';
import { serverUrl } from './ServerConfig';


export const VideoChat = ({ userName }: { userName: string }) => {
  const webRTC = MembraneWebRTC.useMembraneServer();
  const participants = MembraneWebRTC.useRoomParticipants();

  useEffect(() => {
    if (webRTC.error) {
      console.log(webRTC.error);
    }
  }, [webRTC.error]);

  useEffect(() => {
    const start = async () => {
      await requestPermissions();
      await webRTC.connect(serverUrl, 'video_chat', { userMetadata: { displayName: userName } });
      await webRTC.joinRoom();
    }
    start();
    return webRTC.disconnect;
  }, []);

  return (
    <View style={styles.flex}>
      {participants
        .map((p) => (
          <View style={styles.flex} key={p.id}>
            <MembraneWebRTC.VideoRendererView
              participantId={p.id}
              style={styles.flex}
            />
            <Text style={styles.displayName}>{p.metadata.displayName}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  displayName: {
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 5,
  }
});
