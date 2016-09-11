//base.js
import { StyleSheet } from 'react-native';
import cairn from 'cairn';

export default cairn({
    text: {
      fontSize:20,
      margin:5,
      info:{
        color: 'skyblue',
        }
    },
    container: {
        flex:1
    },
    flex:{
        1:{ flex:1},
        2:{ flex:2},
        4:{ flex:4}
    },
    'flex-row':{
        flexDirection:'row'
    }
}, (styles) => StyleSheet.create(styles));
