import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
  imgContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.27,
    elevation: 10,
  },
  imgShadow: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.27,
    elevation: 10,
  },
  poster: {
    flex: 1,
  },
});
