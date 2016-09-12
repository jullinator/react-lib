import {Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import style from '../Styles'

export const Field = ({stil="",update, name="..."})=>
  <TextInput {...style(stil)} placeholder={name} onChangeText={(text)=>{update(text)}} />

export const Button = ({stil1="",stil2="",onPress, text="Button"})=>
  <TouchableOpacity {...style(stil1)} onPress={onPress} >
    <Text  {...style(stil2)} >{text} </Text>
  </TouchableOpacity>


export const Txt = ({stil="",text})=>
	<Text {...style(stil)} >
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
