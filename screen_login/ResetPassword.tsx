import React, { useState } from 'react'
import { View,Text,StyleSheet,Button,Image,Alert } from 'react-native'

//공통사용 컴포넌트 import
import InputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'

type ResetPasswordProps=StackScreenProps<LoginNavScreenList,'ResetPassword'>

export default function ResetPassword(props:ResetPasswordProps):JSX.Element{
    
    // // 1. 우선 테스트 목적의 화면
    // return(
    //     <View style={style.root}>
    //         <Text>ResetPassword</Text>
    //     </View>
    // )

    // 탭에 따른 화면 구성을 위한 state 변수들
    const[tabs,setTabs]=useState<string[]>(['이메일','전화번호'])
    const [tabIndex,setTabIndex]=useState<number>(0)

    // 탭 선택에 따른 안내메시지
    const message=[
        '이메일을 입력하시면 임시 비밀번호를 보내드립니다.',
        '전화번호를 입력하시면 임시 비밀번호를 보내드립니다.'
    ]

    // 2. 비밀번호 재설정 화면
    return(
        <View style={style.root}>
            {/* 1. contents 영역 */}
            <View style={style.contents}>

                {/* 1.1 자물쇠 이미지 영역 */}
                <View>
                    <Image source={require('../Images/img_key_alert.png')} style={{width:36,marginTop:30}} resizeMode='contain'></Image>
                </View>

                {/* 1.2 타이틀 안내문구 */}
                <Text style={style.title}>로그인에 문제가 있나요?</Text>

                {/* 1.3 이메일 또는 전화번호 선택에 대한 안내문구 */}
                <Text style={style.info}>{message[tabIndex]}</Text>

                {/* 1.4 탭 만들기 */}
                <View style={style.tabContainer}>
                    {
                        tabs.map((value,index)=>{
                            return <TabComponent label={tabs[index]} selected={index==tabIndex} onPress={()=>setTabIndex(index)} key={index}></TabComponent>
                        })
                    }
                </View>

                {/* 1.5 정보 입력박스 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.6 전송 버튼 */}
                <View style={{width:'100%',marginVertical:16}}>
                    <Button title='전송' color='#009917' onPress={()=>Alert.alert('임시비밀번호가 발송되었습니다.', '로그인 후 정보수정을 통해 안전한 비밀번호로 변경해주시기')}></Button>
                </View>

            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.link} onPress={()=>props.navigation.goBack()}>로그인화면으로 돌아가기</Text>
            </View>

        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,backgroundColor:'feffff'},
    contents:{flex:1,alignItems:'center',padding:24},
    footer:{borderTopWidth:1,borderTopColor:'#d3d3d3',padding:8, alignItems:'center'},
    title:{
        textAlign:'center',
        color:'#009917',
        fontWeight:'bold',
        fontSize:16,
        marginTop:16,
        marginBottom:8
    },
    info:{color:'#999999', fontSize:12, marginBottom:60},
    link:{
        width:'100%',
        textAlign:'center',
        color:'#009917',
        fontSize:12, 
        textDecorationLine:'underline'
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    },
    lockImageContainer:{
        padding:24,
        borderWidth:2,
        borderColor:'#252525',
        borderRadius:100
    }
})