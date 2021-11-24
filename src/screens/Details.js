import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Article from '../components/details/Article'

export default function Details(props) {
    const { feedData} = props.route.params
    return (
        <View>
            {feedData.type === 'article' ? <ArticleDetail Data ={feedData}/> : <VideoDetail />}
        </View>
    )
}



const ArticleDetail= (props)=>{
    return(
        <View>
            <Article data={props.Data}/>
        </View>
    )
}

const VideoDetail= ()=>{
    return(
        <View>
            <Text>Video Detail</Text>
        </View>
    )
}