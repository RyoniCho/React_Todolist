import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'


const TodoItem=({title,done,})=>{
    return(

        <View style={st.container}>
            <View style={st.todo}>
                <TouchableOpacity activeOpacity={0.5} style={done? st.button_done:st.button}>
                    <FontAwesome name="check" color={done? "white":"#E5E5E5"} size={14}/>
                </TouchableOpacity>
                <Text style={st.title}>
                    {title}
                </Text>
            </View>
        </View>
    )
}
const st=StyleSheet.create({
    title:{
       
        fontSize:16,
        color:'#424242',
    },
    todo:{
        flexDirection:'row',
        alignItems:'center',
        height:60,
        borderBottomWidth:1,
        borderBottomColor:'#E5E5E5'
    },
    button:{
        borderWidth:1,
        borderColor:'#E5E5E5',
        alignItems:'center',
        width:28,
        height:28,
        justifyContent:'center',
        marginRight:8,
        borderRadius:14,

    },
    button_done:{
        borderWidth:1,
        alignItems:'center',
        width:28,
        height:28,
        justifyContent:'center',
        marginRight:8,
        borderRadius:14,
        backgroundColor:'purple'

    },
    container:{
        paddingLeft:16,
        paddingRight:16,
        backgroundColor:'white',
    }
    
})
export default TodoItem