import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button,Appbar, TextInput} from 'react-native-paper';
import { registerStyle } from './register.style';


export const Register = ()=> {
  return (
    <View>
      
        <ScrollView>
          <Appbar>
            <Appbar.BackAction onPress={() => {}}/>
            <Appbar.Content title = 'Register as Student'/> 
          </Appbar>
          <View style={registerStyle.content}>
            <TextInput label="name"/>
            <TextInput label="valid email"/>
            <TextInput label="Password " secureTextEntry={true} right={<TextInput.Icon name='eye-off-outline' onPress={() => {Alert.alert('BOOM')}}/>}/>
            <TextInput label="Re-enter Password " secureTextEntry={true}/>
          </View>
          <Button mode='contained' >
            Register
          </Button>

        </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({})