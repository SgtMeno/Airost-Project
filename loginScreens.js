import * as React from 'react';
import { Alert, TouchableHighlight, View } from 'react-native';
import { Button, Card, Colors, TextInput,ToggleButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from './loginScreenStyle';


export const LoginScreen = () => {

  return(
      <SafeAreaView style={loginStyle.style1}>
        <View style={loginStyle.View}>
          <Card>
            <Card.Title style={loginStyle.titleText} title="STUDENT" uppercase={true}/>

            <Card.Content>
              <TextInput label = "User-ID"></TextInput>
              <TextInput label =  'Password' secureTextEntry={true}></TextInput>
                <View style ={loginStyle.cardButton}>
                <Button style ={loginStyle.cardButton} uppercase={false}>
                  forgor
                </Button>
              
                <Button style ={loginStyle.cardButton} onPress={() => Alert.alert('Login error')} mode='contained' uppercase={false}>
                  Login
                
                </Button>
                
                <Button style ={loginStyle.cardButton} onPress={()=>Alert.prompt('Enter your security email')}> 
                Register
                </Button>
                </View>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
  )
}