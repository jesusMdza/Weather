import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  header: {
    color: '#fff'
  }
});

export default SignIn;
