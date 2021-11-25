import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderTab from '../components/HeaderTab'
import FeedCard from '../components/home/FeedCard'

export default function Home({ navigation }) {

    const [feedData, setFeedData] = useState([])
    const [activeTab, setActiveTab] = useState("Trending")
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [searchText, setSearchText] = useState('')


    const searchItem = () => {
        setFeedData(feedData.filter(item => item.author['name'].toLowerCase().includes(searchText.toLowerCase())))
    }

    const getFeed = () => {
        const base_url = `https://cw-tech.herokuapp.com/feed.json`;
        return fetch(base_url)
            .then(res => res.json())
            .then(json => activeTab === 'Trending' ? setFeedData(json.feed) : setFeedData(json.feed.filter((feed) =>
                feed.type.includes(activeTab.toLowerCase()))))
    }


    useEffect(() => {
        getFeed()
    }, [activeTab])// this hook will execute whenever the value of the state  "activeTab"is changed.

    return (
        // flex:0 is used to make the screen full and hide the bootom of the safeareaview
        // or we can skipp mentioning the flex property itself
        <SafeAreaView style={{ backgroundColor: 'pink', flex: 0 }}>
            <View style={{ backgroundColor: 'pink' }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab}
                    showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}
                    searchText={searchText} setSearchText={setSearchText}
                    onPress={searchItem} clear={getFeed} />
            </View>

                {feedData.length > 0 ?
                    <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
                        <FeedCard feedData={feedData} navigation={navigation} />
                    </ScrollView>
                    :
                    <View style={{backgroundColor:'white',height:'100%',justifyContent:'center',alignItems:'center'}}><Text>No Results found......</Text></View>
                }
                
                

                
                    
                

        </SafeAreaView>
    )
}
