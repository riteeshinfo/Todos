import React, {useState}from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Task =(props) =>{

    return(
        <View style ={styles.item}>
            <View style ={styles.itemleft}>
                <TouchableOpacity style ={styles.circle}></TouchableOpacity>
             <Text style={StyleSheet.itemText}>{props.text}</Text>
            </View>
            
            
        </View>
    )
    
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:'#F9F9FB',
        padding:17,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    circle:{
        height:24,
        width:24,
        borderRadius:12,
        backgroundColor:'#7F56D9',
        borderWidth:2,
        marginRight:15,
    },
    itemleft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',

    },
    itemText:{
        maxWidth:80,
    },

});
export default Task;