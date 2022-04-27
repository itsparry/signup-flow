import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

const Numbers = (props) => {
  const { navigate, goBack } = props.navigation
  const [input1, setInput1] =useState('')
  const [errMsg, nErrMsg] = useState('')
  const setMessage = (message) => {
    return nErrMsg(message)
  }
  const dispatch = useDispatch()
  const validatePhone = (phone) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)
  const onSubmit1 = () => {
      let isValid = true; 
      if (!input1) {
        setMessage('can\'t leave it empty')
        isValid = false;
      } else if (!validatePhone(input1)) {
        setMessage('sorry that phone number doesn\'t work :/')
        isValid = false;
      }

      if (isValid){
        nextThing1()
      }
    }
  
    const nextThing1 = () => {
      dispatch({
        type: 'ADD_PHONE',
        payload: input1,
      })
      navigate('Info')
    }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>numbers</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setInput1(text)}
            value={input1}
          />
          <Text style={styles.notif}>{errMsg}</Text>
        </View>
        <TouchableOpacity onPress={onSubmit1} style={styles.proceed} />
        <TouchableOpacity style={styles.back} onPress={()=>goBack()}>
          <Icon name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  )
}

const Email = (props) => {
  const { navigate, goBack } = props.navigation
  const [input2, setInput2] =useState('')
  const [errMsg, nErrMsg] = useState('')
  const setMessage = (message) => {
    return nErrMsg(message)
  }
  const dispatch = useDispatch()
  const validateEmail = (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  const onSubmit2 = () => {
      let isValid = true; 
      if (!input2) {
        setMessage('can\'t leave it empty')
        isValid = false;
      } else if (!validateEmail(input2)) {
        setMessage('sorry that phone number doesn\'t work :/')
        isValid = false;
      }

      if (isValid){
        nextThing2()
      }
    }
  
    const nextThing2 = () => {
      dispatch({
        type: 'ADD_EMAIL',
        payload: input2,
      })
  
      navigate('Info')
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>      
        <View style={styles.container}>
          <Text style={styles.text}>email</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={text => setInput2(text)}
            value={input2}
          />
          <Text style={styles.notif}>{errMsg}</Text>
        </View>
        <TouchableOpacity onPress={onSubmit2} style={styles.proceed} />
        <TouchableOpacity style={styles.back} onPress={()=>goBack()}>
          <Icon name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  )
}


const Contacts = () => {
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#144D7F',
        tabBarInactiveTintColor: '#656565',
        tabBarIndicatorStyle: styles.indicatorStyle,
        tabBarStyle: { backgroundColor: '#ffffff00' },
      }} style={{ marginTop: '20%' }}>
        <Tab.Screen name="Numbers" component={Numbers} />
        <Tab.Screen name="Email" component={Email} />
      </Tab.Navigator>
  );
}

const totalWidth = Dimensions.get("screen").width;

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
  headernav:{
    marginTop: 50,
  },
  notif:{
    marginTop: 100,
    color: 'red',
  },
  indicatorStyle: {
    width: totalWidth / 4,
    left: totalWidth / 8,
    backgroundColor: '#144D7F',
  },
})


export default Contacts


