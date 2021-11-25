import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'



export default function HeaderTabs({ activeTab, setActiveTab,showSearchBar,setShowSearchBar,searchText,setSearchText,onPress,clear }) {
    // const [activeTab,setActiveTab]= useState('Delivery')

    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                {showSearchBar ?
                <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0.5, borderRadius:5,padding:5,height:30,width:'90%'}}>
                    <TextInput placeholder="Search...." style={{color:'white',width:'90%',fontSize:14,fontWeight:'700'}} value={searchText} onChangeText={value=>setSearchText(value)}/>
                    <TouchableOpacity onPress={()=>{setSearchText('')
                                      clear()}} 
                                      style={{backgroundColor:'white',
                                      borderWidth:0.5,justifyContent:'center',
                                      alignItems:'center',borderRadius:5}}
                                       >
                        <Text style={{padding:1,fontSize:10,fontWeight:'700'}}>clear</Text>
                    </TouchableOpacity>
                </View>
                
                :<>
                <Text style={{fontSize: 15, fontWeight: '800',color:'white'}}>Trending</Text>
               
                </>}
            <View style={{flexDirection:'row'}}>
                {showSearchBar ?
                <>
                <Ionicons style={{marginHorizontal:2,justifyContent:'center',borderRadius:10,borderWidth:1,alignSelf:'center'}} onPress={()=>{setShowSearchBar(false) 
                                   setSearchText('') }} 
                          name="close" size={15} color={'white'}></Ionicons>
                <Ionicons  onPress={()=>{onPress()}} 
                          name="search" size={24} color={'white'}></Ionicons></>
                :
                 <Ionicons  onPress={()=>setShowSearchBar(true)} 
                          name="search" size={24} color={'white'}></Ionicons>}
            </View>
                
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