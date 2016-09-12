import {Actions} from 'react-native-router-flux'
import {action,reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

@autobind
export default class{

	constructor(){

	}
	navigate(page,	params={}){
		Actions[page](params)
	}
}
