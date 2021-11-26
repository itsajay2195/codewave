import React from 'react'
import { View, SafeAreaView } from 'react-native'
import Article from '../components/details/Article'
import VideoFile from '../components/details/VideoFile'

export default function Details({ navigation, ...props }) {
    const { feedData } = props.route.params

    return (
        <View >
            {feedData.type === 'article' ? <ArticleDetail Data={feedData} /> : <VideoDetail uri={feedData.video_link} />}
        </View>
    )
}



const ArticleDetail = (props) => {
    return (
        <View>
            <Article data={props.Data} />
        </View>
    )
}

const VideoDetail = (props) => {
    return (
        <View style={{height:'100%', backgroundColor:'black', justifyContent: 'center', alignContent: 'center'  }}>
            <VideoFile uri={props.uri} />
        </View>
    )
}