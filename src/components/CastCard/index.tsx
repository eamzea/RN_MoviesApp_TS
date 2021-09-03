import React from 'react';
import { View, Text, Image } from 'react-native';
import { Cast } from 'interfaces/movieInterface';
import { styles } from './styles';

interface Props {
  actor: Cast;
}

const CastCard: React.FC<Props> = ({ actor }) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.cardContainer}>
      {actor.profile_path && (
        <View style={styles.imgContainer}>
          <Image source={{ uri }} style={styles.img} />
        </View>
      )}
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastCard;
