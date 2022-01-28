import React from 'react'
import { View, Text, TouchableOpacity, Image,Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width,height } = Dimensions.get('window');

export default function FeedCard({navigation,openBottomModal,...props}) {
  return (
    <View>
      {props.feedData.map((feed, index) => (
        <TouchableOpacity key={index} activeOpacity={1} 
          onPress={(()=>{
          //   navigation.navigate('Details',{
          //   feedData:feed
          // })
          openBottomModal()
        })}
        >

          <View style={{padding:7, backgroundColor: 'white' }}>
            <FeedImage image={feed.thumbnail} />
            <FeedInfo data={feed} />
          </View>

        </TouchableOpacity>))}
    </View>
  )
}



const FeedImage = (props) => (
  <View>
    <Image source={{ uri: props.image }}
      style={{ borderRadius:5,height: 180, width: '100%' }}

    ></Image>
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="bookmark" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
)

const FeedInfo = (props) => (
  <View style={{ position: 'absolute', bottom: 25, alignItems: 'center', marginTop: 10 }}>
    <View>
      <Text numberOfLines={1} style={{ paddingHorizontal: 20, paddingBottom: 10, fontSize: 15, fontWeight: 'bold', color: 'white' }}>{props.data.title}</Text>
    </View>
    <View style={{ marginHorizontal:'2%' ,borderBottomWidth: 0.5,marginBotton: 10, borderColor: 'white', width }} />
    <View style={{ flexDirection: 'row', height: 30,width:300, justifyContent: "space-between",marginTop:5 }}>
          <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="comment-outline" size={25} color="#fff" />
            <Text style={{textAlign:'center',left:5, color:'grey',fontSize:16}} >{props.data.comment_count}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="heart" size={25} color="red" />
            <Text style={{textAlign:'center',left:5,color:'white'}} >21</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="upload" size={25} color="white" />
          </TouchableOpacity>
    </View>
    
  </View>

)
