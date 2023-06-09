import React from 'react'
import { View,TextInput,StyleSheet } from 'react-native'

//props type [ TextInput 컴포넌트의 각 속성들을 전달받기 위한 타입 ]
type Props={
    placeholder:string | undefined,
    secureTextEntry?:boolean | undefined, // nullable : 값을 주지 않아도 됨
    onChangeText?: (text:string)=>void | undefined
}

export default function IputComponent(props:Props):JSX.Element{
    return(
        <View style={style.container}>
            <TextInput //컴포넌트를 사용하는 곳에서 property를 전달받음
                placeholder={props.placeholder} //힌트
                secureTextEntry={props.secureTextEntry} //secure
                onChangeText={props.onChangeText} //글씨변경 이벤트 콜백 함수
                placeholderTextColor='#999999'
                style={style.input}></TextInput>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderColor:'#d3d3d3',
        borderRadius:4,
        backgroundColor:'#fafafa',
        paddingHorizontal:16,
        marginVertical:8
    },
    input:{
        flex:1, //TextInput의 높이를 container높이 40에 맞게
        color:'#252525'
    }
})