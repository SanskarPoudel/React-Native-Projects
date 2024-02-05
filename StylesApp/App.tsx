import React from 'react';
import FlatCards from './components/FlatCards';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCards from './components/ElevatedCards';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
