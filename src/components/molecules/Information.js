import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import Name from 'atoms/Name'
import About from 'atoms/About'

export default function Informations() {
    return (
      <View>
        <Name name='Duy'/>
        <About year='199x'/>
      </View>
    );
  }
  