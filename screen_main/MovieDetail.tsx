import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet, ScrollView, ActivityIndicator, Dimensions, Image} from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import { MovieInfo, MovieNavScreenList } from '../types'
import BigCatalog from '../components_movie/BigCatalog'
type MovieDetailProps = StackScreenProps<MovieNavScreenList, 'MovieDetail'>

export default function MovieDetail(props:MovieDetailProps):JSX.Element{

    //0. 테스트 목적 화면
    // return(
    //     <View>
    //         <Text>{props.route.params?.id}</Text>
    //     </View>
    // )

    //1. 영화상세페이지

    //영화정보들을 저장할 변수
    const [movie, setMovie] = useState<MovieInfo>()

    //전달받은 id로 영화상세정보를 fetch하는 기능 메소드
    const loadData= ()=>{
        const {id} = props.route.params!! //구조분해할당

        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then(res=>res.json())
        .then(json=>setMovie(json.data.movie))
    }

    useEffect(()=>loadData())

    //fetch 데이터가 있는지 확인하여 없다면 로딩화면이 보이도록
    return movie?
    (
        <ScrollView style={style.root}>
            {/* 1. 상세화면의 큰 이미지는 BigCatalog를 재사용 */}
            <Image //네트워크 이미지는 반드시 사이즈 값 필요
                source={{uri:movie.large_cover_image}}
                //화면의 가로사이즈를 얻어와서 이미지의 가로사이드로 지정
                style={{width:Dimensions.get('window').width, height:500}}></Image>

            {/* 2. 영화 정보 출력 영역 */}
            <View>
                <Text style={style.movieTitle}>{movie.title}</Text>
                <View style={style.infoContainer}>
                    <Text style={style.title}>러닝타임</Text>
                    <Text>{movie.runtime}분</Text>
                    <Text style={style.title}>평점</Text>
                    <Text>{movie.rating}점</Text>
                    <Text style={style.title}>좋아요</Text>
                    <Text>{movie.like_count}개</Text>
                </View>
            </View>

            {/* 3. 줄거리 출력 영역 */}
            <View>
                <Text style={style.title}>줄거리</Text>
                <Text style={style.description}>{movie.description_full}</Text>
            </View>

            {/* 4. 배우 캐스팅 정보출력 영역 */}


            {/* 5. 스크린샷 이미지들 출력 화면 영역 */}
        </ScrollView>
    ):
    (
        <View style={style.loadingContainer}>
            <ActivityIndicator size='large' color='#999999'></ActivityIndicator>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1},
    loadingContainer:{flex:1, justifyContent:'center', alignItems:'center'},
    movieTitle:{
        fontSize:24,
        fontWeight:'bold',
        paddingTop:16,
        paddingHorizontal:16,
        color:'#252525'
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:16,
        color:'#252525'
    },
    infoContainer:{
        flexDirection:'row',
        marginVertical:24
    },
    description:{
        paddingHorizontal:16,
        marginVertical:16
    }
})