import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';




const Username = (props) => {
  const { navigate, goBack } = props.navigation
  const [input, setInput] =useState('')
  const [errMsg, nErrMsg] = useState('')
  const setMessage = (message) => {
    return nErrMsg(message)
  }
  const dispatch = useDispatch()
  const validateName = (name) => !/\s/.test(name) && name.length >= 5 && name.length <= 15
  const onSubmit = () => {
      let isValid = true; 
      if (!input) {
        setMessage('can\'t leave it empty')
        isValid = false;
      } else if (!validateName(input)) {
        setMessage('username\'s needs to be more than 5 or less than 15 words')
        isValid = false;
      }
      if (isValid){
        nextThing()
      }
    }
  
    const nextThing = () => {
      dispatch({
        type: 'ADD_USERNAME',
        payload: input,
      })
      navigate('Contacts')
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>      
        <View style={styles.container}>
          <Text style={styles.text}>Pick a username</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={text => setInput(text)}
            value={input}
          />
          <Text style={styles.text2}>Preferably a genderless one so no one can identify you ;)</Text>
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
  text2:{
    position: 'absolute',
    marginTop: 449,
    fontSize: 10,
    color: '#8E8888', 
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


export default Username


