
export default class {
  @observable comp ={
    button:function(  ){  return(<TouchableOpacity style={this.style[key]}  /> )}
  }
  
  constructor(ref){
    this.db = Database.ref(ref) 
  }
  fetch(callback){
    this.db.on('value',snap=>callback(snap))
  }
  save(){
    this.db.push(this.data)
  }
}
