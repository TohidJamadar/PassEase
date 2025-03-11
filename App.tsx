import { Button, Text, View , StyleSheet,Dimensions, TextInput} from 'react-native'
import React, { Component } from 'react'
import Input from './components/Input'

const styles=StyleSheet.create(
  {
    main:{
      flex:1,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center'
    },
    innerdiv:
    {
        height:'70%',
        width:'90%',
        backgroundColor:'rgb(252, 83, 83)',
        borderRadius:30,
        alignItems:'center'
    },

    Register:
    {
      fontSize: 30,
      fontWeight:'bold',
      color:'white',
    },
  
  }
)

export default class App extends Component {
  render() {
    return (
      <View style={styles.main}>
          <View style={styles.innerdiv}>
            <Text style={styles.Register}>Register</Text>
             <Input label='Full Name' placeholder='Enter your name'/>
             <Input label='Email' placeholder='Enter your email'/>
             <Input label='Full Name' placeholder='Enter your name'/>
             <Input label='Full Name' placeholder='Enter your name'/>
             <Input label='Full Name' placeholder='Enter your name'/>
          </View>
      </View>
    )
  }
}