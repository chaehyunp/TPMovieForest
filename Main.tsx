//앱 제작의 주요 작업 순어
// 0) react navigation, AsyncStorage 라이브러리 설치
// 1) Main.tsx에 최상위 Navigator 배치
// 2) Intro 화면 컴포넌트 제작
// 3) Login 관련 3개 화면 컴포넌트 제작 [screen_login 폴더]
// 4) Main 화면 관련 4개 컴포넌트 제작 [screen_main 폴더]

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Navigator에 지정할 스크린 리스트 타입을 별도의 [ types.tsx ] 파일에 작성하여 관리하고 필요한 곳에서 import
import { RootScreenList } from './types'

//앱 전체 화면들을 전환할 수 있는 최상위 Stack Navigator 객체 생성
const RootStack = createStackNavigator<RootScreenList>()

//최상위 Navigator에 의해 전환될 스크린 or Navigator import
import Intro from './Intro'
import LoginNav from './navigators/LoginNav'
import MainNav from './navigators/MainNav'

//NavigationContainer를 가진 root 컴포넌트 - 앱의 시작 컴포넌트(index.js)
export default function Main():JSX.Element{
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name='Intro' component={Intro}></RootStack.Screen>
                <RootStack.Screen name='LoginNav' component={LoginNav}></RootStack.Screen>
                <RootStack.Screen name='MainNav' component={MainNav}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}