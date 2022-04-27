import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, style}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
          <Text style={style}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
      position: 'absolute',
      marginTop: 662,
      bottom: 248,
    },
    text: {
      color: 'black',
    },
})