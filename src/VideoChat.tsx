import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as MembraneWebRTC from "@membraneframework/react-native-membrane-webrtc"
// import { requestPermissions, serverUrl } from "./Utils"

export const VideoChat = ({ displayName }: { displayName: string }) => {
  return <Text>Video chat! User: {displayName}</Text>
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
