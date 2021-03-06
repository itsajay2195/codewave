import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, StatusBar, Platform,Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderTab from '../components/HeaderTab'
import FeedCard from '../components/home/FeedCard'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'



export default function Home({ navigation }) {

    const [feedData, setFeedData] = useState([])
    const [activeTab, setActiveTab] = useState("Trending")
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [loader, setLoader] = useState(false)

    const searchItem = () => {
        setFeedData(feedData.filter(item => item.author['name'].toLowerCase().includes(searchText.toLowerCase())))

    }

    const getFeed = () => {
        setLoader(true)
        const base_url = `https://cw-tech.herokuapp.com/feed.json`;
        return fetch(base_url)
            .then(res => res.json())
            .then(json => activeTab === 'Trending' ? setFeedData(json.feed) : setFeedData(json.feed.filter((feed) =>
                feed.type.includes(activeTab.toLowerCase()))))
            .then(() => setTimeout(() => setLoader(false), 3000))

    }


    useEffect(() => {
        getFeed()
    }, [activeTab])// this hook will execute whenever the value of the state  "activeTab"is changed.

    const [content,setContent] = useState({})
    const [height ,setHeight] = useState(1)

    const openBottomModal = ()=>{
        setHeight('85%')
    }

    const bottomSheetContent = (content)=>{
        setContent(content)
    }

    return (
        // flex:0 is used to make the screen full and hide the bootom of the safeareaview
        // or we can skipp mentioning the flex property itself
        <SafeAreaView style={{ backgroundColor: 'pink', flex: 0, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            {/* Platform.OS === "android" ? StatusBar.currentHeight : 0 = this piece of code is just to ensure that the header is not misplaced on devices with knotch */}
            <View style={{ backgroundColor: 'pink' }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab}
                    showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}
                    searchText={searchText} setSearchText={setSearchText}
                    onPress={searchItem} clear={getFeed} />
            </View>
            {feedData.length > 0 ?
                <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
                    <FeedCard feedData={feedData} navigation={navigation} openBottomModal={openBottomModal} bottomSheetContent={bottomSheetContent} />
                </ScrollView>
                :
                <View style={{ backgroundColor: 'white', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text>{loader ? <ActivityIndicator size="large" color="pink" /> : 'No Results found'}</Text></View>
            }
            <BottomSheet enablePanDownToClose detached snapPoints={[height]}>
                <BottomSheetScrollView>
                    <Text>{content?.author?.name}</Text>
                    <Button title='Hi' onPress={()=>setHeight(1)}></Button>
                </BottomSheetScrollView>
            </BottomSheet>
            
        </SafeAreaView>
    )
}
