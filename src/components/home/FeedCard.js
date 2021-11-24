import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function FeedCard(props) {
  return (
    <>
      {props.feedData.map((feed, index) => (
        <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 30 }}
          // onPress={(()=>navigation.navigate('Restaurant Details',{
          //   name:restaurant.name,
          //   image:restaurant.image_url,
          //   reviews:restaurant.reviews,
          //   price:restaurant.price,
          //   rating:restaurant.rating,
          //   categories:restaurant.categories
          // }))}
          onPress={() => console.warn('clicked')}
        >

          <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
            {console.warn}
            <FeedImage image={feed.thumbnail} />
            <FeedInfo data={feed} />
            {/* rating={restaurant.rating} */}
          </View>

        </TouchableOpacity>))}
    </>
  )
}



const FeedImage = (props) => (
  <>
    <Image source={{ uri: props.image }}
      style={{ height: 180, width: '100%' }}

    ></Image>
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="bookmark" size={25} color="#fff" />
    </TouchableOpacity>
  </>
)

const FeedInfo = (props) => (
  <View style={{ position: 'absolute', bottom: 25, alignItems: 'center', marginTop: 10 }}>
    <View>
      <Text numberOfLines={1} style={{ paddingHorizontal: 20, paddingBottom: 10, fontSize: 15, fontWeight: 'bold', color: 'white' }}>{props.data.title}</Text>
    </View>
    <View style={{ borderBottomWidth: 1, marginLeft: 40, marginBotton: 10, borderColor: 'white', width: '100%' }} />
    <View style={{ flexDirection: 'row', height: 30,width:300, justifyContent: "space-between",marginTop:5 }}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="comment-outline" size={25} color="#fff" />
            <Text style={{textAlign:'center',left:5, color:'grey',fontSize:16}} >{props.data.comment_count}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="heart" size={25} color="red" />
            <Text style={{textAlign:'center',left:5,color:'white'}} >21</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="upload" size={25} color="white" />
          </View>
    </View>
    
  </View>

)
