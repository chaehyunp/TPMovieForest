import React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native'
import { MovieInfo } from '../types'

type Props = {
    movie:MovieInfo,
    onPress?: (id:string)=>void | undefined
}

export default function BigCatalog(props:Props):JSX.Element{
    return( //누를경우, 상세정보를 가져오기 위해서 id값이 있어야함
        <TouchableOpacity activeOpacity={0.8} onPress={()=>props.onPress!!(props.movie.id)}> 
            <Image //네트워크 이미지는 반드시 사이즈 값 필요
                source={{uri:props.movie.large_cover_image}}
                //화면의 가로사이즈를 얻어와서 이미지의 가로사이드로 지정
                style={{width:Dimensions.get('window').width, height:300}}></Image>
            {/* 영화제목, 개봉일, 장르 등의 영화정보 */}
            {/* 이미지와 겹쳐서 배치 - absolute 속성을 이용하여 배치 */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenres}>{props.movie.genres.join(', ')}</Text> 
                    {/* 장르 배열이 딱딱 붙어서 나오기때문에 join() 이용하여 콤마로 구분 */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom:16,
        width:'100%',
        alignItems:'flex-start'
    },
    labelYear:{
        color:'#ffffff',
        paddingVertical:4,
        paddingHorizontal:10,
        fontWeight:'bold',
        marginLeft:8,
        backgroundColor:'#009917',
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        padding:8,
        opacity:0.8
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',
        padding:8
    },
    labelGenres:{
        fontSize:12,
        color:'#ffffff',
        padding:8
    }
})