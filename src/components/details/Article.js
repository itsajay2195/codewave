import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Article(props) {
    return (
        < >

            <View style={{ height: 400 }}>
                <ArticleImage thumbnail={props.data.thumbnail}></ArticleImage>
                <ArticleTitle name={props.data.name}></ArticleTitle>
                <AuthorTitle name={props.data.author['name']} date={props.data.published_date}></AuthorTitle>

            </View>
            <ArticleDescription description={props.data.description}></ArticleDescription>
        </>
    )
}
function parseISOString(date) {
    var actual = date.split('+');
    var dateOutput=[];
    var d = new Date(actual[0]);
    var inUtc = d.getUTCDate();
    dateOutput.push(inUtc);
    inUtc = d.getUTCMonth();
    dateOutput.push(inUtc+1);
    inUtc = d.getUTCFullYear();
    dateOutput.push(inUtc);
    var months = {1:'JAN',2:'FEB',3:'MAR',4:'APR',5:'MAY',6:'JUN',7:'JUL',8:'AUG',9:'SEP',10:'OCT',11:'NOV',12:'DEC'};
    return `${dateOutput[0]} ${months[dateOutput[1]]} ${dateOutput[2]} , ${actual[1]} (UTC) `
}

const ArticleImage = (props) => (
    <Image source={{ uri: props.thumbnail }} style={{ width: '100%', height: 400 }}></Image>
)

const ArticleTitle = (props) => <Text style={{ fontSize: 20, position: 'absolute', bottom: 20, fontWeight: '600', margin: 10, color: 'white', marginHorizontal: 15 }} numberOfLines={2}>{props.name}</Text>
const AuthorTitle = (props) => <Text style={{ fontSize: 10, position: 'absolute',bottom: 5, fontWeight: '600', color: 'red', marginHorizontal: 15 }} numberOfLines={2}><Text style={{ color: 'white' }}>By  </Text>{props.name}  <Text style={{color:'white'}}>{parseISOString(props.date)}</Text></Text>

const ArticleDescription = (props) => <Text style={{ marginTop: 10, fontSize: 15.5, fontWeight: '400', marginHorizontal: 15 }}>{props.description}</Text>