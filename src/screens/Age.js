import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';




const Age = (props) => {
  const { navigate, goBack } = props.navigation
  const [input, setInput] =useState('')
  const [errMsg, nErrMsg] = useState('')
  const setMessage = (message) => {
    return nErrMsg(message)
  }
  const dispatch = useDispatch()
  const validateAge = (age) => age <= 17
  const onSubmit = () => {
      let isValid = true; 
      if (!input) {
        setMessage('can\'t leave it empty')
        isValid = false;
      } else if (validateAge(input)) {
        setMessage('too young')
        isValid = false;
      }

      if (isValid){
        nextThing()
      }
    }
  
    const nextThing = () => {
      dispatch({
        type: 'ADD_AGE',
        payload: input,
      })
  
      navigate('Username')
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>      
        <View style={styles.container}>
          <Text style={styles.text}>Age</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={text => setInput(text.trim())}
            value={input}
          />
          <Text style={styles.notif}>{errMsg}</Text>
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.proceed} />
        <TouchableOpacity style={styles.back} onPress={()=>goBack()}>
            <Icon name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  input:{
    marginTop: 386,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 232,
  },
  text:{
    position: 'absolute',
    marginTop: 239,
  },
  back: {
		width: 25,
		height: 24,
		marginTop: 100,
    marginLeft: 50,
    position: 'absolute',
    },
  proceed:{
    width: 29,
    height: 29,
    marginTop: 430,
    position: 'absolute',
    borderRadius: 100,
    marginLeft: 350,
    backgroundColor: '#7F95A0',
  },
  notif:{
    marginTop: 100,
    color: 'red',
  }
})


export default Age


