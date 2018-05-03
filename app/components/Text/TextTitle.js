import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import moment from 'moment';
import PropTypes from 'prop-types'

const TextTitle =({base,date,quote,conversionRate})=>{
   // const {base,date,quote,conversionRate} = props;
    return(

        <Text style = {styles.text}>1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM d, YYYY')}</Text>
    );
   
}
TextTitle.prototype = {
    base:PropTypes.string,
    date:PropTypes.object,
    quote:PropTypes.string,
    conversionRate:PropTypes.number,
}
export {TextTitle}