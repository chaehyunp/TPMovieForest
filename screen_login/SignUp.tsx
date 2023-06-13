import React,{useState} from 'react'
import { View,Text,StyleSheet,Button,Image } from 'react-native'

// 공통사용 컴포넌트
import InputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'

type SignUpProps=StackScreenProps<LoginNavScreenList,'SignUp'>

export default function SignUp(props:SignUpProps):JSX.Element{
    
    // // 1. 우선 테스트 목적의 화면
    // return(
    //     <View style={style.root}>
    //         <Text>SignUp</Text>
    //     </View>
    // )

    // 탭작업에서 사용할 state 변수
    const [tabs, setTabs] = useState(['전화번호','이메일']) //탭의 라벨을 string 배열로
    const [tabIndex,setTabIndex] = useState(0) //현재 선택된 탭 번호

    // [ 완료 ] 버튼 클릭시 실행하는 메소드
    const signUp = ()=>{
        //이곳에서 서버에 정보들(이메일,전화번호,비밀번호) 전송
        //전송작업이 끝나면 회원가입 종료 및 이전 로그인화면으로 이동
        props.navigation.goBack()
    }

    // 2. 회원가입 화면
    return(
        <View style={style.root}>
            {/* contents, footer 2개의 영역으로 구성 */}
            {/* 1. contents 영역 */}
            <View style={style.contents}>

                {/*  이미지 영역 */}
                <View>
                    <Image source={require('../Images/logo_symbol.png')} style={{width:60, height:80, marginTop:30}} resizeMode='contain'></Image>
                </View>

                {/* 타이틀 안내문구 */}
                <Text style={style.title}>환영합니다!</Text>

                {/* 1.3 이메일 또는 전화번호 선택에 대한 안내문구 */}
                <Text style={style.info}>전화번호와 이메일을 이용하여 가입 가능합니다.</Text>

                {/* 1.1 전화번호와 이메일 중 원하는 정보로 회원가입 할 수 있도록 Tab 구성 */}
                <View style={style.tabContainer}>
                    {/* tab 컴포넌트는 RN에 없으므로 Custom Component로 제작 */}
                    {/* <TabComponent label='전화번호' selected={true}></TabComponent>
                    <TabComponent label='이메일' selected={false}></TabComponent> */}
                    {/* 탭들을 배열로 만들어 컴포넌트 제작 */}
                    {/* 탭 라벨의 갯수만큼 탭 컴포넌트를 만들기 위해 map() 이용 */}
                    {
                        tabs.map((value,index)=>{
                            return <TabComponent label={value} key={index} selected={index==tabIndex} onPress={()=>setTabIndex(index)}></TabComponent>
                        })
                    }
                </View>

                {/* 1.2 정보입력 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.3 이메일탭일 경우 비밀번호 입력 컴포넌트 필요 */}
                {
                    //if(tabIndex==1) //JSX의 {} 안에서는 if 문법 불가능
                    //&& 연산자 이용 - 앞의 조건값이 true일때만 뒤에 따르는 실행문을 읽어들임
                    tabIndex==1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                }

                {/* 1.4 전화번호 탭일때의 [ 다음 ] 버튼 */}
                {
                    tabIndex===0 && <View style={{width:'100%',marginVertical:16}}><Button title='다음' color='#009917' onPress={()=>setTabIndex(1)}></Button></View>
                }

                {/* 1.5 이메일 탭일때의 [ 완료 ] 버튼 */}
                {
                    tabIndex===1 && <View style={{width:'100%',marginVertical:16}}><Button title='완료' color='#009917' onPress={()=>signUp()}></Button></View>
                }

                {/* 1.6 전화번호 탭일때 입력 이유를 안내하는 메시지 표시 */}
                {
                    tabIndex===0 && <Text style={style.footerCopyright}>영화마을의 앱 업데이트 내용을 SMS로 수신할 수 있으며, {'\n'}언제든지 수신을 취소할 수 있습니다.</Text>
                }

            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerInfo}>이미 계정이 있으시다면? <Text style={style.link} onPress={()=>props.navigation.goBack()}>로그인하기</Text></Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,backgroundColor:'feffff'},
    contents:{flex:1,alignItems:'center',padding:24},
    footer:{borderTopWidth:1,borderTopColor:'#d3d3d3',padding:8, alignItems:'center'},
    info:{color:'#999999', fontSize:12, marginBottom:60},
    footerInfo:{color:'#999999', fontSize:12},
    title:{
        textAlign:'center',
        color:'#009917',
        fontWeight:'bold',
        fontSize:16,
        marginBottom:8
    },
    link:{
        width:'100%',
        textAlign:'center',
        color:'#009917',
        fontSize:12, 
        textDecorationLine:'underline'
    },
    footerCopyright:{
        textAlign:'center',
        fontSize:12,
        color:'#999999'
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    }
})