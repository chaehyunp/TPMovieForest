import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

// 타입만드는 또다른 방법
interface Props{
    label:string
    selected?: boolean | undefined,
    onPress?: ()=>void | undefined
}

export default function TabComponent(props:Props):JSX.Element{

    //탭의 선택여부에 따라 글씨 색상 변경
    let color = props.selected? '#009917' : '#999999'

    //탭의 선택여부에 따라 아래 경계선 색상 변경
    style.container.borderBottomColor = color

    return(
        //탭 터치에 따른 처리 메소드를 지정하기위해
        <TouchableOpacity style={style.container}>
            {/* 탭에 보여질 글씨는 props로 전달받기 */}
            <Text style={{color:color}} onPress={props.onPress}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1, //탭이 놓여질때 다른 탭과 flex값을 같게 하여 가로 너비를 균등하게 하기 위함
        borderBottomWidth:2,
        borderBottomColor:'#999999',
        paddingBottom:14,
        alignItems:'center',
        justifyContent:'center'
    }
})