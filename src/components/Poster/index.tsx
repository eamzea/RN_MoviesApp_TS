import React from 'react';
import { View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { Movie } from 'interfaces/movieInterface';
import { styles } from './styles';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const Poster: React.FC<Props> = ({
  movie,
  height = windowHeight * 0.45,
  width = windowWidth * 0.65,
}) => {
  const navigator = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width, height, ...styles.mainContainer }}
      onPress={() =>
        navigator.dispatch(
          CommonActions.navigate({ name: 'Details', params: movie }),
        )
      }>
      <View style={styles.imgContainer}>
        <View style={styles.imgShadow}>
          <Image source={{ uri }} style={styles.poster} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Poster;
