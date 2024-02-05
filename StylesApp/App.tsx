import React from 'react';
import FlatCards from './components/FlatCards';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import Cards3 from './components/Cards3';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <Cards3 />
        <Cards3 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
