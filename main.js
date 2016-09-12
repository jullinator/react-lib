import AppStore from './Mobx'
import Router from './Router'
import Launch from './Scenes'
import React from 'react'

const store = new AppStore()
export default ()=>
	<Router store={store}
			initial={{key:'launch',component:Launch}}
			/>
