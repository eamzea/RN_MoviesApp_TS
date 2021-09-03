import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import useMovies from 'hooks/useMovies';
import { GradientBackground, Poster, Section } from 'components';
import { styles, windowWidth } from './styles';
import getImgColors from 'helpers/getImgColors';
import { GradientContext } from 'context/GradientContext';

const Home = () => {
  const { isLoading, nowPlaying, famous, topRated, upcoming } = useMovies();
  const { top, bottom } = useSafeAreaInsets();
  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = '#D81E5B', secondary = '#FEC0CE'] = await getImgColors(
      uri,
    );

    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="red" size={100} />
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView
        style={{
          marginTop: top,
        }}>
        <View style={{ paddingTop: top / 2, paddingBottom: bottom }}>
          <View style={styles.carouselContainer}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <Poster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.5}
              inactiveSlideScale={0.75}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <Section title={'Now Playing'} data={nowPlaying} />
          <Section title={'Most Famous'} data={famous} />
          <Section title={'Top Rated'} data={topRated} />
          <Section title={'Upcoming'} data={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;
