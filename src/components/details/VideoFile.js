import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import { Video } from 'expo-av';


export default function VideoFile() {
    const { width } = Dimensions.get('window');

    return (

        <Video
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/cwtest-d8dc6.appspot.com/o/Pexels%20Videos%203886.mp4?alt=media&token=9e672bb6-a6e1-4f20-8499-287f690cdc09' }}
            shouldPlay
            useNativeControls
            style={{ width, height: "100%" }}
        />

        
    )
}
