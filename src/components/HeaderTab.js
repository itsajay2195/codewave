import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'



export default function HeaderTabs({ activeTab, setActiveTab, showSearchBar, setShowSearchBar, searchText, setSearchText, onPress, clear }) {

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                {showSearchBar ?
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderRadius: 5, padding: 5, height: 30, width: '90%' }}>
                        <TextInput placeholder="Search...." style={{ color: 'white', width: '90%', fontSize: 14, fontWeight: '700' }} value={searchText} onChangeText={value => setSearchText(value)} />
                        <TouchableOpacity onPress={() => {
                            setSearchText('')
                            clear()
                        }}
                            style={{
                                backgroundColor: 'white',
                                borderWidth: 0.5, justifyContent: 'center',
                                alignItems: 'center', borderRadius: 5
                            }}
                        >
                            <Text style={{ padding: 1, fontSize: 10, fontWeight: '700' }}>clear</Text>
                        </TouchableOpacity>
                    </View>

                    : <>
                        <Text style={{ fontSize: 15, fontWeight: '800', color: 'white' }}>{activeTab}</Text>

                    </>}
                <View style={{ flexDirection: 'row' }}>
                    {showSearchBar ?
                        <>
                            <TouchableOpacity onPress={() => {
                                setShowSearchBar(false)
                                setSearchText('')
                            }} style={{ marginHorizontal: 2, justifyContent: 'center', borderRadius: 10, borderWidth: 1, alignSelf: 'center' }}>
                                <Ionicons name="close" size={15} color={'white'}></Ionicons>
                            </TouchableOpacity>

                            <Ionicons style={{ marginHorizontal: 1, justifyContent: 'center', alignSelf: 'center' }} onPress={() => { searchText.length > 0 && onPress() }}
                                name="search" size={24} color={'white'}></Ionicons></>
                        :
                        <Ionicons onPress={() => setShowSearchBar(true)}
                            name="search" size={24} color={'white'}></Ionicons>}
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <View style={{ borderBottomColor: activeTab === 'Trending' ? "black" : 'transparent', borderBottomWidth: 1 }}>
                    <HeaderButton text="Trending" icon="trending-up" btnColor="black" textcolor="white" activeTab={activeTab} setActiveTab={setActiveTab} setShowSearchBar={setShowSearchBar}
                        setSearchText={setSearchText} />
                </View>

                <View style={{ borderBottomColor: activeTab === 'Article' ? "black" : 'transparent', borderBottomWidth: 1 }}>
                    <HeaderButton text="Article" icon="albums" btnColor="black" textcolor="white" activeTab={activeTab} setActiveTab={setActiveTab} setShowSearchBar={setShowSearchBar}
                        setSearchText={setSearchText} />
                </View>

                <View style={{ borderBottomColor: activeTab === 'Video' ? "black" : 'transparent', borderBottomWidth: 1 }}>
                    <HeaderButton text="Video" icon="film" btnColor="white" textcolor="black" activeTab={activeTab} setActiveTab={setActiveTab} setShowSearchBar={setShowSearchBar}
                        setSearchText={setSearchText} />
                </View>



            </View>
        </View>

    )
}


const HeaderButton = (props) => {
    return (

        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            margin: 5,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,

        }}
            onPress={() => {
                props.setActiveTab(props.text)
                props.setShowSearchBar(false)
                props.setSearchText('')

            }}

        >
            <Ionicons style={{ color: props.activeTab === props.text ? "white" : "black" }} name={props.icon} size={20} color={'white'}></Ionicons>
        </TouchableOpacity>



    )
}