import React, { createContext, useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setMainPreviousColors: (colors: ImageColors) => void;
}

interface ImageColors {
  primary: string;
  secondary: string;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider: React.FC<Props> = ({ children }) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  const setMainPreviousColors = (colors: ImageColors) => {
    setPreviousColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        previousColors,
        setMainColors,
        setMainPreviousColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
