import { GradientContext } from 'context/GradientContext';
import useFade from 'hooks/useFade';
import React, { useContext, useEffect } from 'react';
import { Animated, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground: React.FC<Props> = ({ children }) => {
  const { colors, previousColors, setMainPreviousColors } =
    useContext(GradientContext);

  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setMainPreviousColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary, 'white']}
        style={styles.gradientContainer}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.7, y: 0.7 }}
      />
      <Animated.View style={{ ...styles.gradientContainer, opacity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={styles.gradientContainer}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.7, y: 0.7 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
