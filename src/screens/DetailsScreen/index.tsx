import React from 'react';
import { View, Image, Text, ActivityIndicator, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from 'navigator/Navigator';
import { styles } from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import useMovieDetails from 'hooks/useMovieDetails';
import MovieDetails from 'components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, castData, movieData } = useMovieDetails(movie.id);

  const { bottom, top } = useSafeAreaInsets();

  return (
    <ScrollView style={{ marginBottom: bottom }}>
      <View style={styles.imgContainer}>
        <View style={styles.imgShadow}>
          <Image source={{ uri }} style={styles.img} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
      </View>
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator size={50} color="grey" />
        ) : (
          <MovieDetails movieFull={movieData!} cast={castData!} />
        )}
      </View>

      <View
        style={{
          ...styles.icon,
          top: Platform.OS === 'android' ? 30 : top * 1.5,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            size={40}
            color="white"
            style={styles.iconShadow}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
