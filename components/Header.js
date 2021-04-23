import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header=()=>{
    return(
        <View style={st.container}>
            <Text style={st.title}>
                할 일 목록
            </Text>
        </View>
    )
}

const st=StyleSheet.create({
    container:{
        marginTop: 56,
        marginLeft:20,
        marginBottom:16,
    },
    title:{
        color:'#212121',
        fontSize: 32,
        fontWeight: '600',
    }
})

export default Header