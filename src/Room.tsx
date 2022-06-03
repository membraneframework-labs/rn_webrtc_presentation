import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
// import * as Membrane from '@membraneframework/react-native-membrane-webrtc';
import { PhoneDownIcon } from './icons';

export const Room = ({ disconnect }: { disconnect: () => void }) => {
  // const participants = Membrane.useRoomParticipants();
  const participants = [];

  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        {participants
          .map((p) => (
            <View style={styles.flex} key={p.id}>
              <Membrane.VideoRendererView
                participantId={p.id}
                style={styles.flex}
              />
              <Text style={styles.displayName}>{p.metadata.displayName}</Text>
            </View>
          ))}
      </View>
      <View style={styles.controls}>
        <Pressable onPress={disconnect} >
          <PhoneDownIcon width={32} height={32} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  displayName: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 24,
  }
});
