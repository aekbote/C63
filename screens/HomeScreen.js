import React, { Component } from 'react';
import {StyleSheet, View, Text,TextInput, TouchableOpacity, } from 'react-native';
import { Header } from 'react-native-elements';

constructor(){
    super();
    this.state = {
        text: text,
        isSearchPressed: false,
        word : "Loading...",
        lexicalCategory: '',
        examples : [],
        definition : ""
    }
}

export default class HomeScreen extends Component{
    
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"

        return fetch(url)
        .then((data)=>{
            if(data.status===200)
            {
                return data.json()
            }
            else
            {
                return null
            }
        })
    }

    render(){
        return(
            <View>
                   <TextInput
            style={styles.inputBox}
            onChangeText={text => {
             this.setState({
                text: text,
                isSearchPressed: false,
                word : "Loading...",
                lexicalCategory: '',
                examples : [],
                definition : ""
            })
           }}    
        )
        
      value={this.state.text} 
    />
  
    <TouchableOpacity
    style={styles.searchButton}

    onPress={()=> {
        this.setState({ isSearchPressed: true})
        this.getWord(this.state.text)
    }}
    >


    <Text>HomeScreen</Text>
    </TouchableOpacity>

            </View>

        
   
}
