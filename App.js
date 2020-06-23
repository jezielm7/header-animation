import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages';

const headerAnimation = () => {
  return (
    <>
      <StatusBar backgroundColor="#1d1427"/>
      <Home />
    </>
  );
}

export default headerAnimation;