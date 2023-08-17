import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Slider from './src/components/Slider';

const App = () => {
  const SliderData = [
    {
      id: '1',
      Image: require('./src/assets/images/online-payment.png'),
      title: 'Send Recharge',
      Description: 'Gain 10% by sending a recharge today',
      CTA: null,
    },
    {
      id: '2',
      Image: undefined,
      title: 'Share JLRecharge',
      Description: 'Share JLRecharge with family and friends',
      CTA: 'Share Now',
    },
    {
      id: '3',
      Image: require('./src/assets/images/invoice.png'),
      title: ' Pay Invoice',
      Description: 'Pay an invoice with JLRecharge',
      CTA: 'Pay Now',
    },
  ];
  return <Slider SliderData={SliderData} />;
};



export default App;
