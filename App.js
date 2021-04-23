import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <TodoItem title="바보바보바보" done={true}/>
      <TodoItem title="병신병신병신" done={false}/>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
 