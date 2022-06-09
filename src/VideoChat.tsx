import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as MembraneWebRTC from "@membraneframework/react-native-membrane-webrtc"
import { requestPermissions, serverUrl } from "./Utils"

export const VideoChat = ({ displayName }: { displayName: string }) => {
  const webRTC = MembraneWebRTC.useMembraneServer();
  const participants = MembraneWebRTC.useRoomParticipants();

  useEffect(() => {
    const setup = async () => {
      await requestPermissions();
      await webRTC.connect(serverUrl, "video_chat", { userMetadata: { displayName: displayName } })
      await webRTC.joinRoom();
    }
    setup();
    return webRTC.disconnect;
  }, []);

  useEffect(() => {
    if (webRTC.error) {
      console.warn(webRTC.error);
    }
  }, [webRTC.error]);

  return (
    <View style={styles.flex}>
      {
        participants.map((participant) => (
          <View style={styles.flex} key={participant.id}>
            <MembraneWebRTC.VideoRendererView participantId={participant.id} style={styles.flex} />
            <Text style={styles.displayName}>{participant.metadata.displayName}</Text>
          </View>
        ))
      }
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
    color: "white",
    left: 0,
    bottom: 0,
    padding: 5,
  }
});
