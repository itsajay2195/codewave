import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import HeaderTab from '../components/HeaderTab'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: 'pink', flex: 1,}}>
            <View style={{backgroundColor:'pink'}}>
                <HeaderTab />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white' }}>

            </View>
        </SafeAreaView>
    )
}
