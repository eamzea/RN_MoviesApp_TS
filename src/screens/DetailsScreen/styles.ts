import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.27,
    elevation: 10,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  imgShadow: {
    flex: 1,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  img: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  contentContainer: {
    marginVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.5,
  },
  icon: {
    position: 'absolute',
    zIndex: 99,
    elevation: 10,
    borderRadius: 50,
  },
  iconShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 10.27,
    elevation: 20,
    borderRadius: 50,
  },
});
