import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function HeaderTabs({ activeTab, setActiveTab }) {
    // const [activeTab,setActiveTab]= useState('Delivery')

    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                <Text style={{fontSize: 15, fontWeight: '800',color:'white'}}>Trending</Text>
                <Ionicons name="search" size={24} color={'white'}></Ionicons>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <HeaderButton text="All" btnColor="black" textcolor="white" activeTab={activeTab} setActiveTab={setActiveTab}></HeaderButton>
                <HeaderButton text="Article" btnColor="black" textcolor="white" activeTab={activeTab} setActiveTab={setActiveTab}></HeaderButton>
                <HeaderButton text="Video" btnColor="white" textcolor="black" activeTab={activeTab} setActiveTab={setActiveTab}></HeaderButton>
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
            borderRadius: 30
        }}
            onPress={() => props.setActiveTab(props.text)}

        >
            <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: '800' }}>{props.text}</Text>
        </TouchableOpacity>



    )
}