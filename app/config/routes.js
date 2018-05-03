import {StackNavigator} from 'react-navigation'
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import React from 'react'
import {StatusBar} from 'react-native'

const HomeStack = StackNavigator({
Home:{
    screen:Home,
    navigationOptions:{
        header:()=> null,
    }
},
 Login:{
    screen:Login,
    navigationOptions:({navigation})=>({
       // console('passed header title= ',navigation.state.params.title);
        headerTitle:navigation.state.params.title
    })
},
SignUp:{
    screen:SignUp,
} 
},{
   headerMode:'screen', 
});

/* const CurrencyListStack = StackNavigator({
    CurrencyList:{
        screen:CurrencyList,
        navigationOptions:({navigation})=>({
            headerTitle:navigation.state.params.title
        })
    },
})
 */
export default StackNavigator({
    Home:{
        screen:HomeStack,

    },
    /* CurrencyList:{
        screen:CurrencyListStack /*CurrencyList,
        navigationOptions:({navigation})=>({
            headerTitle:navigation.state.params.title
        })
    },
     */
},
     {
        //mode:'modal',
        cardStyle:{paddingTop: StatusBar.currentHeight},
        headerMode:'none',
    } 
);