import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, Animated } from 'react-native';

import styles from './styles';

const Home = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[
        styles.header,
        {
          height: scrollY.interpolate({
            inputRange: [10, 30, 60],
            outputRange: [60, 20, 0],
            extrapolate: 'clamp',
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 10, 50],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
          })
        }
      ]}>
        <Image
          source={require('../assets/cam.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />

        <Animated.Image
          source={require('../assets/logo.png')}
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [135, 70],
            }),
            height: 50
          }}
          resizeMode="contain"
        />

        <Image
          source={require('../assets/send.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </Animated.View>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY },
          },
        }],
          { useNativeDriver: false })}
      >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default Home;