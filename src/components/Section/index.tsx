import React from 'react';
import { Poster } from 'components';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { styles } from './styles';
import { Movie } from 'interfaces/movieInterface';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

interface Props {
  title: string;
  data: Movie[];
}

const Section: React.FC<Props> = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <Poster
            movie={item}
            width={windowWidth * 0.375}
            height={windowHeight * 0.25}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Section;
