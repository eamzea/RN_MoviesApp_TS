import useFade from 'hooks/useFade';
import React from 'react';
import { View, Animated, Button } from 'react-native';

const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#084F6A',
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 25,
        }}
      />
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
