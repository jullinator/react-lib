import styles from './Styles'
import React, {Component} from 'react'
import {TouchableOpacity, Text} from 'react-native'

export class Button extends Component {
	render(){
		let {text,onPress} = this.props
		return(
			<TouchableOpacity style={styles.btn} onPress={onPress}>
				<Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		)
	}
}
