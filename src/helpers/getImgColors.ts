import ImageColors from 'react-native-image-colors';

const getImgColors = async (uri: string) => {
  let primaryColor, secondaryColor;
  const colors = await ImageColors.getColors(uri, {});

  if (colors.platform === 'android') {
    primaryColor = colors.dominant;
    secondaryColor = colors.average;
  }
  if (colors.platform === 'ios') {
    primaryColor = colors.primary;
    secondaryColor = colors.secondary;
  }

  return [primaryColor, secondaryColor];
};

export default getImgColors;
