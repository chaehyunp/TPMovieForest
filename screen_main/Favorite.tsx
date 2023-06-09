import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
type FavoriteProps = BottomTabScreenProps<MainNavScreenList, 'Favorite'>

export default function Favorite(props:FavoriteProps):JSX.Element{

    //0. 테스트 목적 화면
    return(
        <View>
            <Text>FAVORITE</Text>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1},
})