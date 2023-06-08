import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { Platform } from 'react-native/types';

export default function App() {
  const [task,setTask] = useState();
  const [taskitems,setTaskitems] =useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskitems([...taskitems,task])
    setTask(null);

  }
  const completeTask = (index) => {
    let itemcopy =[...taskitems];
    itemcopy.slice(index,1)
    setTaskitems(itemcopy);

  }
  return (
    <View style={styles.container}>
      <View style={styles.titel}>
        <Text style ={styles.task}>Task Details</Text>
        </View>
        <View>
          <Text style ={styles.todo_title}>task titel</Text>
          <Text style={styles.todo_text}>NFT Web App Prototype</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>description</Text>
          <Text style={styles.describe}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..</Text>
        </View>
        <View style= {styles.todo_list}>
          <View style={styles.add}><Text style={styles.list}>Task List</Text>
          <Text style={styles.addWapper}>-</Text></View>
          
          {
            taskitems.map((item,index) =>{
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task  text={item} />

                </TouchableOpacity>
              )
              
            })
          }
          
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS =='ios'?"padding":"height"}
        style={StyleSheet.writeTask}>
          <TouchableOpacity onPress={() =>handleTask()}>
            <View style={styles.addWapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder={'write a task'} value={task} 
          onChangeText={text => setTask(text)}></TextInput>

        </KeyboardAvoidingView>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  titel: {
    alignItems: 'center',

  },
  task: {
    fontSize:16,
    marginBottom:54,
    fontWeight: 'bold',
    

  },
  todo_title:{
    paddingLeft:17,
    fontSize:14,
    color: '#5D6B98',
    marginBottom:12,

  },
  todo_text:{
    paddingHorizontal:17,
    fontSize:20,
    color:'#1D2939',
 },
 description:{
  marginTop:20,
  paddingLeft:17,
 },
 todo_list:{
  paddingHorizontal:17,
 },
 text:{
  fontSize:14,
  color:'#5D6B98',
 },
 describe:{
  marginTop:10,
  fontSize:14,
  marginBottom:67,
 },
 list:{
  color:'#5D6B98',
  fontSize:14,
  marginBottom:16,
 },
 writeTask:{
  position:'absolute',
  paddingHorizontal:17,
  bottom:60,
  margin:100,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
 },
 input:{
  paddingVertical:15,
  paddingHorizontal:15,
  borderRadius:60,
  borderColor:'#F9F9FB',
  backgroundColor:'#F9F9FB',
  borderWidth:1,
  width:250,
 },
 addWapper:{
  width:30,
  height:30,
  borderRadius:15,
  backgroundColor:'#98A2B3',
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#98A2B3',
  borderWidth:1,
 },
 add:{
  paddingHorizontal:17,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
 }


});
