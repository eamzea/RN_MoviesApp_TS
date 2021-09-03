import { Dimensions, Platform, StyleSheet } from 'react-native';

export const { width: windowWidth, height: windowHeight } =
  Dimensions.get('window');

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: windowHeight / 2,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
});
