//1. 최상위 Stack Navigator의 화면 리스트 타입
export type RootScreenList = {
    Intro:undefined,
    LoginNav:undefined,
    MainNav:undefined
}

//2. LoginNav Stack Navigator의 화면 리스트 타입
export type LoginNavScreenList = {
    Login:undefined,
    SignUp:undefined,
    ResetPassword:undefined,

    //MainNav로 이동할 수 있도록 등록
    MainNav:undefined
}

//3. MainNav BottomTabNavigator 화면 리스트 타입
export type MainNavScreenList = {
    MovieNav:undefined,
    Favorite:undefined,
    Community:undefined

}

//4. MovieNav Stack Navigator 화면 리스트
export type MovieNavScreenList = {
    MovieList:undefined,
    MovieDetail:undefined | {id:string} //extra data

    //로그아웃시 Intro 화면으로 이동할 수 있도록 등록
    Intro:undefined
}

//영화 1개의 정보 타입 -json object의 모든 key를 반드시 사용하지 않아도 됨
export interface MovieInfo{
    id:string,
    title:string,
    year:string,
    genres:string[],
    large_cover_image:string,

    //영화 상세정보에서 필요한 key
    runtime:string,
    rating:string,
    like_count:string,
    description_full:string,
}