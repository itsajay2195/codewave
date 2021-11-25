import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Article(props) {
    return (
        < >
            
            <View style={{height:400}}>
                <ArticleImage thumbnail={props.data.thumbnail}></ArticleImage>
                <ArticleTitle name={props.data.name}></ArticleTitle>
            </View>
            <ArticleDescription description={props.data.description}></ArticleDescription>
        </>
    )
}


const ArticleImage =(props)=>(
    <Image source={{uri:props.thumbnail}} style={{width:'100%',height:400}}></Image>
)

const ArticleTitle =(props)=><Text style={{fontSize:20,position:'absolute',bottom:1,fontWeight:'600',marginTop:10,color:'white',marginHorizontal:15}} numberOfLines={2}>{props.name}</Text>

const ArticleDescription=(props)=><Text style={{marginTop:10,fontSize:15.5,fontWeight:'400',marginHorizontal:15}}>{props.description}</Text>