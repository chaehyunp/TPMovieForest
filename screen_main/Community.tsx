import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
type CommunityProps = BottomTabScreenProps<MainNavScreenList, 'Community'>

export default function Community(props:CommunityProps):JSX.Element{

    //0. 테스트 목적 화면
    return(
        <View>
            <Text>COMMUNITY</Text>
        </View>
    )
}


const style=StyleSheet.create({
    root:{flex:1,},
})