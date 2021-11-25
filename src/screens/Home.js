import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderTab from '../components/HeaderTab'
import FeedCard from '../components/home/FeedCard'

export default function Home({ navigation }) {

    const [feedData, setFeedData] = useState([])
    const [activeTab, setActiveTab] = useState("All")

    const getFeed = () => {
        const base_url = `https://cw-tech.herokuapp.com/feed.json`;

        return fetch(base_url)
            .then(res => res.json())
            .then(json => activeTab === 'All' ? setFeedData(json.feed) : setFeedData(json.feed.filter((feed) =>
                feed.type.includes(activeTab.toLowerCase()))))
    }


    useEffect(() => {
        getFeed()
    }, [activeTab])// this hook will execute whenever the value of the state  "activeTab"is changed.

    return (
        <SafeAreaView style={{ backgroundColor: 'pink', flex: 0, }}>
            <View style={{ backgroundColor: 'pink' }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>

            <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
                <FeedCard feedData={feedData} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}
{/* <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

</ScrollView> */}