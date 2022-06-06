import React, { useCallback, useEffect, useState } from 'react';

import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

export default function App() {
  const [userName, setUserName] = useState<string>("")

  return (
    < View style={styles.container} >
      <Text style={styles.header}>Hello World!</Text>
      <TextInput value={userName} placeholder="Insert user name" onChangeText={setUserName} style={styles.textInput} />
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
