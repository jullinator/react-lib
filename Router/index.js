import React, {Component} from 'react';
import {Router, Scene} from 'react-native-mobx';

export default ({store, scenes=[], initial})=>
	<Router store={store}>
		<Scene key={initial.key} component={initial.component} hideNavBar />
		{scenes.map(scene=>	<Scene key={scene.key}	component={scene.component}/>	)}
	</Router>
