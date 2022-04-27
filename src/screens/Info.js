import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const uName = useSelector(state => state.username)
  const uPhone = useSelector(state => state.phone)
  const uEmail = useSelector(state => state.email)
  const uAge = useSelector(state => state.age)
  const uPassword = useSelector(state => state.password)
  

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>The user's info:</Text>
      <Text>{'\n'} </Text>
      <Text>username: {uName}</Text>
      <Text>age: {uAge}</Text>
      <Text>phone number: {uPhone}</Text>
      <Text>email: {uEmail}</Text>
      <Text>password: {uPassword}</Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
    fontSize: 22,
    fontWeight: '200',
  }
})