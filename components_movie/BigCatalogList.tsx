import React,{useState, useEffect} from 'react'
import {View,FlatList,StyleSheet, Text} from 'react-native'

import BigCatalog from './BigCatalog'

type Props = {
    url:string,
    onPress?: (id:string)=>void
}

export default function BigCatalogList(props:Props):JSX.Element{

    // REST API를 이용하여 파싱한 영화데이터들 state 변수
    const [movies,setMovies] = useState([])

    const loadData = ()=>{
        fetch(props.url)
        .then(response=>response.json())
        .then(json=>setMovies(json.data.movies)) //미리 준비해놓은 빈배열에 json 안, data 안에 있는 movies
    }

    //화면에 처음 보여지거나 갱신될때 자동 호출되는 Hooks 기술
    useEffect(()=>loadData())

    return(
        <View style={style.container}>
            <FlatList 
                horizontal={true}
                pagingEnabled={true}
                data={movies} 
                renderItem={(obj)=>{
                    return <BigCatalog 
                        movie={obj.item}
                        onPress={props.onPress}></BigCatalog>
                }}></FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    container:{height:300, marginBottom:8}
})