import React from 'react'
import { Image } from 'react-native'

//BottomTabNavigator 객체 생성 [ 등록할 스크린의 리스트 타입은 별도 types.tsx에서 작성 ]
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
const BottomTab = createBottomTabNavigator<MainNavScreenList>()

//등록할 스크린 컴포넌트 import
import MoiveNav from './MovieNav'
import Favorite from '../screen_main/Favorite'
import Community from '../screen_main/Community'

export default function MainNav():JSX.Element{
    return(
        <BottomTab.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'#009917',
                tabBarInactiveTintColor:'#999999',
            }}>
            <BottomTab.Screen 
                name='MovieNav' 
                component={MoiveNav}
                options={{
                    tabBarLabel:'HOME',
                    tabBarIcon:()=><Image source={require('../Images/Tabs/ic_home.png')} style={{width:24, height:24}}></Image>
                }}></BottomTab.Screen>
            <BottomTab.Screen 
                name='Favorite' 
                component={Favorite}
                options={{
                    tabBarLabel:'FAVORITE',
                    tabBarIcon:()=><Image source={require('../Images/Tabs/ic_favorite.png')} style={{width:24, height:24}}></Image>
            }}></BottomTab.Screen>
            <BottomTab.Screen 
                name='Community' 
                component={Community}
                options={{
                    tabBarLabel:'COMMUNITY',
                    tabBarIcon:()=><Image source={require('../Images/Tabs/ic_profile.png')} style={{width:24, height:24}}></Image>
            }}></BottomTab.Screen>
        </BottomTab.Navigator>
    )

}