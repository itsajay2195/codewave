import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Article(props) {
    return (
        <View>
            <ArticleImage thumbnail={props.data.thumbnail}></ArticleImage>
            <ArticleTitle name={props.data.name}></ArticleTitle>
            <ArticleDescription description={props.data.description}></ArticleDescription>
        </View>
    )
}


const ArticleImage =(props)=>(
    <Image source={{uri:props.thumbnail}} style={{width:'100%',height:100}}></Image>
)

const ArticleTitle =(props)=><Text style={{fontSize:29,fontWeight:'600',marginTop:10,marginHorizontal:15}}>{props.title}</Text>

const ArticleDescription=(props)=><Text style={{marginTop:10,fontSize:15.5,fontWeight:'400',marginHorizontal:15}}>{props.description}</Text>