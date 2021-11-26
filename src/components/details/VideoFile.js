import React from 'react'
import { View, Text, Dimensions, platform ,StatusBar} from 'react-native'
import { Video } from 'expo-av';


export default function VideoFile(props) {
    const { width,height } = Dimensions.get('window');

    return (
     
            <Video
            source={{ uri: props.uri}}
            shouldPlay
            useNativeControls
            style={{ width, height: 300, justifyContent:'center',alignSelf:'center' }}
        />
       
        

        
    )
}

//paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0