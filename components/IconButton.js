import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = (props) => {

    const {onPress,icon,color}=props;
  return (
   <Pressable onPress={onPress} style={({pressed})=>
pressed && styles.pressed
   }>
    <Ionicons name={icon} size={15} color={color}/>
   </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    },
})