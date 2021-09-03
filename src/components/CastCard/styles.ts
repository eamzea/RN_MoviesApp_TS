import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: Dimensions.get('screen').width * 0.75,
    marginVertical: 10,
    marginRight: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.27,
    elevation: 5,
  },
  imgContainer: {
    width: '35%',
    aspectRatio: 1,
  },
  img: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  dataContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 16,
  },
});
