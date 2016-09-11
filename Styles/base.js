//base.js
import { StyleSheet } from 'react-native';
import cairn from 'cairn';

export default cairn({
    textInfo: {
      color: 'skyblue',
      fontSize:20,
      margin:5
    },
    container: {
        flex:1
    },
    'flex-2':{
        flex:2
    },
    'flex-1':{
        flex:1
    },
    'flex-4':{
        flex:4
    },
    'flex-row':{
        flexDirection:'row'
    }
}, (styles) => StyleSheet.create(styles));
