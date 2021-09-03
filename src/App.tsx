import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from 'navigator/Navigator';
import { GradientProvider } from 'context/GradientContext';
// import { FadeScreen } from 'screens';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppContext: React.FC<Props> = ({ children }) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppContext>
        <Navigator />
      </AppContext>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
