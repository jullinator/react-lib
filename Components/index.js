import {Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'

export const Field = ({update, name="..."})=>
  <TextInput placeholder={name} onChangeText={(text)=>{update(text)} />

export const Button = ({onPress, text="Button"})=>
  <TouchableOpacity onPress={onPress} >
    <Text>{text} </Text>
  </TouchableOpacity>


export const Linker = ({text, path, size="12"}) =>
		<Button onPress={Actions. size={size} text={text} />


export const Text = ({text})=>
	<Text style={{fontSize:'20px'}}>
		{text}
	</Text>
	


// export const MultiField = ({update,desc, size="12"})=>{
// 	return(
// 		<textarea className={`col s${size}`} placeholder={desc} onChange={(e)=>{update(e.target.value)}} ></textarea>
// 	)
// }
export const Container = ({children})=>
	<View {...style('container')} >
		{children}
	</View>



