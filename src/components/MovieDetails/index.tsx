import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { Cast, FullMovieResponse } from 'interfaces/movieInterface';
import { styles } from './styles';
import CastCard from 'components/CastCard';

interface Props {
  movieFull: FullMovieResponse;
  cast: Cast[];
}

const MovieDetails: React.FC<Props> = ({ movieFull, cast }) => {
  return (
    <View>
      <View style={styles.ratingContainer}>
        <Icon name="star-outline" size={20} color="grey" />
        <Text style={styles.ratingText}>
          {movieFull.vote_average} -{' '}
          {movieFull.genres.map(genre => genre.name).join(', ')}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Story</Text>
        <Text style={styles.infoBody}>{movieFull.overview}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Budget</Text>
        <Text style={styles.infoBody}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>
      <View style={styles.mainScrollContainer}>
        <Text style={styles.infoTitle}>Cast</Text>
        <FlatList
          data={cast}
          style={styles.horizontalScrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastCard key={item.name} actor={item} />}
        />
      </View>
    </View>
  );
};

export default MovieDetails;
