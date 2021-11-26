import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import { Video } from 'expo-av';


export default function VideoFile(props) {
    const { width } = Dimensions.get('window');

    return (

        <Video
            source={{ uri: props.uri}}
            shouldPlay
            useNativeControls
            style={{ width, height: "100%" }}
        />

        
    )
}
