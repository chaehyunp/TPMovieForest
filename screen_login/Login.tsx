import React from 'react'
import { View,Text,StyleSheet,Button, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// 공통사용 컴포넌트 import
import InputComponent from '../components/InputComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type LoginProps=StackScreenProps<LoginNavScreenList,'Login'>

export default function Login(props:LoginProps):JSX.Element{

    // // 1. 우선 테스트 목적의 화면
    // return(
    //     <View style={style.root}>
    //         <Text>Login</Text>
    //     </View>
    // )

    // 이메일 입력값을 저장하는 변수
    let email=''

    // InputComponent의 글씨가 변경될때마다 발동하는 함수
    const changeText = (s:string)=> {email = s} //중괄호를 줄여쓰면 리턴으로 해석해서 여기서는 줄여쓰지 않겠음
    

    // 로그인 버튼 클릭시 실행될 메소드
    const login = async()=>{
        //원래는 서버에 전송하여 DB에 저장
        //디바이스 저장소에 이메일정보를 저장하여 재접속할 경우 로그인을 재차 물어보지 않도록
        await AsyncStorage.setItem('email',email)
        //Async는 비동기, 저장중에 에러가 날 수 있으므로 async-await 문법을 통해서 비동기작업 완료후 화면 전환되도록

        //로그인이 완료되었으니 main 화면으로 전환
        props.navigation.replace('MainNav') //메인화면에서 뒤로가기시 로그인화면으로 돌아가지 않기 위해 replace
        //화면 리스트 타입에 Main이 없음, type에 추가
    }

    // 2. 로그인 화면
    return(
        <View style={style.root}>
            {/* 크게 2개의 영역으로 구성 : contents (로그인 콘텐츠 영역), footer (아래쪽에 회사이름 or 앱이름 표시영역) */}
            {/* 1. 로그인 콘텐츠 영역 */}
            <View style={style.contents}>
                {/* 1.1 로고 */}
                {/* <Text style={style.logo}>무비포레</Text> */}
                <Image source={require('../Images/logo_symbol.png')} style={{width:100}} resizeMode='contain'></Image>

                {/* 1.2 이메일/비밀번호 입력란 */}
                {/* TextInput은 로그인, 회원가입, 비밀번호 재설정 화면에서도 모두 사용되므로 사용빈도가 높음, 
                하나하나 스타일하기 어려우므로 별도의 CustomComponent로 제작하여 재사용 */}
                <InputComponent placeholder='이메일' onChangeText={changeText}></InputComponent>
                <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>

                {/* 1.3 로그인버튼 */}
                <View style={{width:'100%',marginVertical:16}}>
                    <Button title='로그인' color='#009917' onPress={login}></Button>
                </View>

                {/* 1.4 비밀번호 재설정 */}
                <Text style={style.link} onPress={()=>props.navigation.navigate('ResetPassword')}>비밀번호를 잊으셨나요?</Text>

                {/* 1.5 회원가입 안내 */}
                <Text style={style.info}>계정이 없으시다면? <Text style={style.link} onPress={()=>props.navigation.navigate('SignUp')}>가입하기</Text></Text>
            </View>
            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerCopyright}>MovieForest by Hue</Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,backgroundColor:'feffff'},
    contents:{flex:1,justifyContent:'center',alignItems:'center',padding:32},
    footer:{borderTopWidth:1,borderTopColor:'#d3d3d3',padding:8},
    logo:{color:'#292929',fontSize:28,textAlign:'center', marginBottom:16, fontWeight:'bold'},
    info:{color:'#999999', fontSize:12},
    link:{
        width:'100%',
        textAlign:'center',
        color:'#009917',
        fontSize:12, 
        textDecorationLine:'underline',
        marginVertical:16
    },
    footerCopyright:{
        textAlign:'center',
        fontSize:12,
        color:'#999999'
    }
})