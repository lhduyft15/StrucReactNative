import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
                                                                                                                                
import * as imgUrl from 'assets/images/imgUrl.js'
import Informations from 'components/molecules/Information';

export default class HomeComponent extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Informations/>
                <Image source={imgUrl.homeUrl} style={{width: 60, height: 60}} />
                <Image source={imgUrl.menuUrl} style={{width: 60, height: 60}} />
                <Image source={imgUrl.surveyUrl} style={{width: 60, height: 60}} />
            </View>
        )
    }
}
