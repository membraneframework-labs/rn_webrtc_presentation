import { PermissionsAndroid, Platform } from 'react-native';

export async function requestPermissions() {
  if (Platform.OS == 'ios') return;
  const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  ]);
  if (
    granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
    PermissionsAndroid.RESULTS.GRANTED &&
    granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
    PermissionsAndroid.RESULTS.GRANTED
  ) {
    console.log('You can use the camera');
  } else {
    throw 'Camera permission denied';
  }
}

export const serverUrl = 'https://videoroom.membraneframework.org/socket';
